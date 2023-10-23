import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/user';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import jwt_decode from "jwt-decode";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState({
        usr: '',
        pswd: ''
      });
    const createHandler = (e) => {
        setItem({...item, [e.target.name]:e.target.value});
    }
    const {loginListItemResult} = useSelector((state) => state.list); 
    //console.log(sessionStorage.getItem('msg'));

    const auth2 = async (e) => {
      e.preventDefault();
      const result = await axios({
        method: "POST",
        url: "http://localhost:3400/login",
        data:item
         });
        //console.log(result.data.data);
      if (result.data.status === 200) {
        //sessionStorage.setItem('id', result.data.data.id);
        //sessionStorage.setItem('role', result.data.data.role);
        localStorage.setItem('token', result.data.data.token);
        const af = jwt_decode(localStorage.getItem('token'));
        console.log(af);
        Swal.fire(
          "Username dan Password Benar!",
          'Berhasil Login',
          "success"
        );
        navigate('/dashboard'); 
      }
      else{
        Swal.fire(
                "Username Atau Password Eror!",
                result.data.status,
                "warning"
        );
        //console.log('aaaa')
        //alert(result.data.status);
      }
  }

    const auth = (e) => {
        e.preventDefault();
        dispatch(login(item));
        const a = JSON.parse(localStorage.getItem('aa'));
        console.log(a);
        if (+a.msg !== 200) {
            // Swal.fire(
            //     "Username Atau Password Eror!",
            //     sessionStorage.getItem('msg'),
            //     "warning"
            // );
            // sessionStorage.removeItem('msg');
        }
        else{
          //sessionStorage.removeItem('msg');  
          //navigate('/dashboard');  
        }
    }
    
    //console.log('token = '+sessionStorage.getItem('token'));
    return (
        <section class="hero is-success has-background-grey-light is-fullheight is-fullwidth">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-4-desktop">
                  <form className='box' onSubmit={(e)=>auth2(e)}>
                    <div className='field mt-5'>
                        <label className='label'>Username</label>
                        <div className='controls'>
                            <input type='text' className='input' name='usr' placeholder='Username' onChange={(e)=>createHandler(e)}/>
                        </div>
                    </div>
                    <div className='field mt-5'>
                        <label className='label'>Password</label>
                        <div className='controls'>
                            <input type='text' className='input' name='pswd' placeholder='Password' onChange={(e)=>createHandler(e)}/>
                        </div>
                    </div>
                    <div className='field mt-5'>
                        <button className='button is-link is-fullwidth'>Login</button>
                    </div>
                    <br></br>
                    <center>
                  <p>Anda Belum Mempunyai Akun? Registrasi Disini <Link to={'register'} style={{color:'blue'}}>Register</Link> </p>
                  </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Login;
