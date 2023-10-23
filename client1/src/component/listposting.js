import React, { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosting, getPosting1, updatePosting } from '../action/user';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const Listposting = () => {
    const navigate = useNavigate();
    var [a, seta] = useState(0);
    const dispatch = useDispatch(); 
    const {get1PostItemResult} = useSelector((state) => state.list);
    const [showCards, setShowCards] = useState(false);
    const [updatedt, setupdate] = useState(false);
    useEffect(() => {
        const af = jwt_decode(localStorage.getItem('token'))
        dispatch(getPosting1(localStorage.getItem('token'), af.id));
        //console.log(getPostItemResult); 
      }, [updatedt]);
      const [dd, setdd] = useState({});  
    
      const updatepost = (id, title, content) => {
        //console.log(id, title, content);
        const data = {id : id, title:title, content:content};
        console.log(data);
        setdd(data);
        navigate(`edit/${id}/${title}/${content}`);
      }
    
    

      const postingdt = (id, data) =>{
        Swal.fire({
            title: "Input Data Berhasil",
            text: "Apakah Anda Ingin Kembali Ke Halaman Login",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Kembali Ke Halaman Login",
          }).then( (result) => {
            if (result.isConfirmed) {
                setupdate(!updatedt);
                dispatch(updatePosting(id, data, localStorage.getItem('token')));
                //setupdate(!updatedt);
                Swal.fire(
                    "Good Job!",
                    "This is button handler",
                    "success"
                    )    
              }
            
          });
      }

      function Card({ id, title, content, status, showCard }) {
        return (
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
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden" style={{ overflowWrap: "break-word" }}>
          {content}
        </p>
        
      </div>
      <div className="px-6 py-4 flex justify-end">
    
      <button className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded mr-2 hover:bg-blue-700" onClick={()=>updatepost(id, title, content)}>
              Update
            </button>
            {status === 0 ? <button className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded hover:bg-blue-700" onClick={()=>postingdt(id, {status:1})}>
              Posting
            </button> : <button className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded hover:bg-blue-700" onClick={()=>postingdt(id, {status:0})}>
              Unposting
            </button>}
            
      </div>
    </div>
    </Transition>
    
        );
      }


    return (
        <div className="container mx-auto p-4 flex flex-wrap">
        {get1PostItemResult ? (get1PostItemResult.map((item)=>{
          return (<Card key={item.id} id={item.id} title={item.title} content={item.content} status={item.status} showCard={showCards}/>)
        })) : <p>Tidak Ada Item</p>}
      {/* {cardData.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} showCard={showCards}/>
      ))} */}
    </div>
    );
}

export default Listposting;
