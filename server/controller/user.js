import { err } from "../helper/errorhandling.js";
import models, { sequelize } from "../model2/init-models.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

const insert_dt = async (req, res) => {
    try {
        const {usr, pswd} = req.body;
        if (pswd.length > 8) {
            const salt = bcrypt.genSaltSync(10);
            const passhash = bcrypt.hashSync(pswd, salt);
            const result = await models.users.create(
                {username:usr,
                password:passhash,
                role:0},
                {returning:true}
            )
            res.send(err(result, 200, 'Sukses'));    
        }
        else{
            res.send(err(400, 'Jumlah Karakter Terlalu Pendek'));    
        }
        
    } catch (e) {
        res.send(err(400, e.message));
    }
}

const find1 = async (req, res) =>{
    try {
        const reslt = await models.users.findOne({where:{username:'lolo'}, attributes:['id', 'username']});
        res.send(err(reslt, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));
    }
}

const login = async (req, res) => {
    try {
        const user = await models.users.findOne({where:{username:req.body.usr}});
        //console.log(user);
        if (user) {
            const match = await bcrypt.compare(req.body.pswd, user.password);
            console.log(match);
            if (match) {
                console.log(user.username);
                const accsess_token = jwt.sign({id:user.id, role:user.role,username:user.username}, process.env.SECR_KEY, {expiresIn:'3h'});
                const refresh_token1 = jwt.sign({username:user.username}, process.env.SECR_KEY2, {expiresIn:'1d'});
                await models.users.update(
                    {tokens:'true'},
                    {where:{username:req.body.usr}}
                );
                res.cookie('refresh_token', refresh_token1, 
                {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000
                });
                res.send(err({token:accsess_token, id:user.id, role:user.role}, 200, 'sukses'))
            }
            else{
                res.send(err(401, 'Password Tidak Ada'));    
            }   
        }
        else{
            res.send(err(401, 'Username Tidak Ada'));
        }
    } catch (e) {
        res.send(err(400, e.message));
    }
}


const logout = async (req, res) => {
    try {
        const refresh = req.cookies.refresh_token;
        if (refresh) {
            const user = await models.users.findOne({where:{tokens:refresh}});
            if (user) {
            //console.log(user.id);
            await models.users.update({
                tokens:null
            }, {where:{id:user.id}});
            res.clearCookie('refresh_token');
            res.send(err(200, 'sukses'));
            }
            else{
                res.send(err(400, 'Token Tidak Sesuai'));    
            }
        }
        else{
            res.send(err(400, 'Tidak Terauthorisasi'));
        }
    } catch (e) {
        res.send(err(400, e.message));
    }
}

export default {
    insert_dt,
    find1,
    login,
    logout
}