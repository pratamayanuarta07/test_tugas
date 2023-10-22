import { err } from "../helper/errorhandling.js";
import models, { sequelize } from "../model2/init-models.js";


const insert_content = async (req, res) => {
    try {
        const {title, content, posting, userid, linkedin, email, telpon} = req.body;
        const result = await models.postingan.create(
            {title:title,
            content:content,
            status:posting,
            user_id:userid,
            linkedin:linkedin,
            email:email,
            telpon:telpon
        },
        {returning:true}
        );
        res.send(err(result, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));       
    }
}

const get_content = async (req, res) => {
    try {
        console.log('amamamama');
        const result = await models.postingan.findAll({where:{status:1}});
        res.send(err(result, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));
    }
}

const update_content = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const result = await models.postingan.update({status:status}, {where:{id:id}});
        res.send(err(result, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));
    }
}

const update_content1 = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await models.postingan.findAll({where:{user_id:id}});
        res.send(err(result, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));
    }
}

const update_content2 = async (req, res) => {
    try {
        const result = await models.postingan.update({title:req.body.title, content:req.body.content,
        linkedin:req.body.linkedin, email:req.body.email, telpon:req.body.telpon},
          {where:{id:req.params.id}}  );
        res.send(err(result, 200, 'sukses'));
    } catch (e) {
        res.send(err(400, e.message));
    }
}



export default {
    insert_content,
    get_content,
    update_content,
    update_content1,
    update_content2
}