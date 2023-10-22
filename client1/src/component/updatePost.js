import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPost, updatePosting1 } from '../action/user';
import Swal from "sweetalert2";

const UpdatePost = () => {
    const dispatch = useDispatch();
    //const data = useParams();
    const { id, title, content } = useParams();
    const [item, setItem] = useState({
        title: title,
        content:content,
        linkedin:'',
        email:'',
        telpon:'',
      });
    const createHandler = (e) => {
        setItem({...item, [e.target.name]:e.target.value});
        //console.log(item);
    }
    const updatedt =  () => {
        dispatch(updatePosting1(id, item, sessionStorage.getItem('token')));
        // Swal.fire(
        //     "Good Job!",
        //     "This is button handler",
        //     "success"
        //     )
        alert('Sukses Update');
    }

    console.log(item);  
    return (
        <div className='container'>
          <Transition
          show={true}
          appear={true}
          enter="transition-opacity duration-5900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-5900"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="container mx-auto">
            <h3 className='text-xl'>Buat Postingan Baru</h3>
            <br></br>
        <form action="" onSubmit={()=> updatedt()}>
          <div className="form-group mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title :</label>
            <input
              type="text"
              name="title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder={title}
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content :</label>
            <textarea
              type="text"
              name="content"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder={content}
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn :</label>
          <input
              type="text"
              name="linkedin"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="LinkedIn"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
          <input
              type="text"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">No. Telepon :</label>
          <input
              type="text"
              name="telpon"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="No. Telpom"
              onChange={(e) => createHandler(e)}
            />
          </div>
                    <br></br>
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
        </form>
      </div>
      </Transition>  
        </div>
    );
}

export default UpdatePost;
