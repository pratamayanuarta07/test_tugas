import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, getItem } from '../action/user';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState({
        usr: '',
        pswd: ''
      });
    const createHandler = (e) => {
        setItem({...item, [e.target.name]:e.target.value});
    }
    //sessionStorage.setItem('msg', 'aa')

    const insert = (e) => {
        
        try {
            e.preventDefault();
            dispatch(addItem(item));    
            console.log(sessionStorage.getItem('msg'));
            console.log(typeof(sessionStorage.getItem('msg')));
            if (+sessionStorage.getItem('msg') !== 200) {             
            Swal.fire(
                "Password Eror!",
                sessionStorage.getItem('msg'),
                "warning"
            );
            sessionStorage.removeItem('msg');
            }
            else{
                Swal.fire({
                    title: "Input Data Berhasil",
                    text: "Apakah Anda Ingin Kembali Ke Halaman Login",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ya, Kembali Ke Halaman Login",
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                        navigate(`/`);
                    }
                  });
            }
            
        
        } catch (e) {
          Swal.fire(
          "Good Job!",
          "This is button handler",
          "warning"
          )
            console.log(e);
        }
        
        // Swal.fire({
        //     title: "Input Data Berhasil",
        //     text: "Apakah Anda Ingin Kembali Ke Halaman Login",
        //     icon: "success",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Ya, Kembali Ke Halaman Login",
        //   }).then(async (result) => {
        //     if (result.isConfirmed) {
        //         navigate(`/`);
        //     }
        //   });
        
    } 
    

    useEffect(() => {
        dispatch(getItem());
    }, [dispatch]);
    
    //console.log(getListItemResult);
    //console.log(item);
    return (
        <section class="hero is-success has-background-grey-light is-fullheight is-fullwidth">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-4-desktop">
                  <form className='box' onSubmit={(e)=>insert(e)}>
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
                        <button className='button is-success is-fullwidth'>Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Register;
