import React from 'react';
import { XCircleIcon } from "@heroicons/react/solid";
const Modla = ({ isOpen, onClose, linkedin, email, telpon }) => {
    const closeModal = () => {
        onClose();
      };
    
      return (
    //     <div
    //   className={`fixed inset-0 flex items-center justify-center z-50 ${
    //     isOpen ? "block" : "hidden"
    //   }`}
    // >
    //   <div className="fixed inset-0 bg-black opacity-50"></div>
    //   <div className="bg-white rounded-lg w-96 z-10 p-4 shadow-lg">
    //     <div className="flex justify-between items-center mb-4">
    //       <h2 className="text-2xl font-bold text-center w-full">Hubungi Kami</h2>
    //       <button onClick={closeModal} className="text-gray-600 hover:text-red-500">
    //         <XCircleIcon className="w-6 h-6" />
    //       </button>
    //     </div>
    //     <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mx-auto mb-4">
    //       {/* Ikon Round */}
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    //       </svg>
    //     </div>
    //     <div className="text-center text-gray-600">
    //     <p>
    //         <img src='https://www.pinclipart.com/picdir/middle/97-971470_linkedin-linkedin-social-media-icons-clipart.png' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
    //         info@example.com
    //       </p>
    //       <p>
    //         <img src='https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
    //         info@example.com
    //       </p>
    //       <p>
    //         <img src='https://th.bing.com/th/id/OIP.b5UUTfI_wIpvFpnzABdUtgHaIE?pid=ImgDet&rs=1' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
    //         info@example.com
    //       </p>
    //     </div>
    //     <button
    //       className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
    //       onClick={closeModal}
    //     >
    //       Tutup
    //     </button>
    //   </div>
    // </div>
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg w-96 p-8 shadow-lg z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-center w-full">Hubungi Kami</h2>
          <button onClick={closeModal} className="text-gray-600 hover:text-red-500">
            <XCircleIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          {/* <img src='https://th.bing.com/th/id/OIP.b5UUTfI_wIpvFpnzABdUtgHaIE?pid=ImgDet&rs=1' alt="Email Logo" className="h-8 w-8 inline mr-3" /> */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
           </svg>
        </div>
        <div className="text-center text-gray-600">
             <p className="text-xl">
             <img src='https://www.pinclipart.com/picdir/middle/97-971470_linkedin-linkedin-social-media-icons-clipart.png' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
             {linkedin}
           </p>

           <p className="text-xl">
             <img src='https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
             {email}
           </p>

           <p className="text-xl">
             <img src='https://th.bing.com/th/id/OIP.b5UUTfI_wIpvFpnzABdUtgHaIE?pid=ImgDet&rs=1' alt="Email Logo" className="h-6 w-6 inline mr-2" /> {/* Gunakan logo email */}
             {telpon}
           </p>
        </div>
        
      </div>
    </div>
      );
}

export default Modla;
