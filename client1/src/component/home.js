import React, { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosting } from '../action/user';
import Modla from './modla';
const Home = () => {
  const dispatch = useDispatch(); 
  const {getPostItemResult} = useSelector((state) => state.list);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

      useEffect(() => {
        console.log(sessionStorage.getItem('token'));
        dispatch(getPosting(sessionStorage.getItem('token')));
        //console.log(getPostItemResult); 
      }, []);
    
    console.log('idnya : '+sessionStorage.getItem('id'));
    console.log('rolenya : '+sessionStorage.getItem('role'));
    console.log('tokennya : '+sessionStorage.getItem('token'));
      function Card({ title, content, showCard, linkedin, email, telpon }) {
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
        <br></br>
        <button className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded" onClick={openModal}>
          Contact
        </button>
      <Modla isOpen={isModalOpen} onClose={closeModal} linkedin={linkedin} email={email} telpon={telpon}></Modla>
      </div>

    </div>
    </Transition>
    
        );
      }
      const [showCards, setShowCards] = useState(false);

    return (
        <div className="container mx-auto p-4 flex flex-wrap">
        {getPostItemResult ? (getPostItemResult.map((item)=>{
          return (<Card key={item.id} title={item.title} content={item.content} showCard={showCards} linkedin={item.linkedin} email={item.email} telpon={item.telpon}/>)
        })) : <p>Tidak Ada Item</p>}
      {/* {cardData.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} showCard={showCards}/>
      ))} */}
    </div>
    );
}

export default Home;
