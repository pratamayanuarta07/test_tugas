import React, { useEffect, useState } from 'react';
import SideBar from './sidebar';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../action/user';
import axios from 'axios';
import { Transition } from "@headlessui/react";
import TopBar from './topbar';
import { Outlet } from "react-router-dom";

const Layout = () => {
    // const dispatch = useDispatch();
    // const [token, settoken] = useState('');
    // const {refreshListItemResult} = useSelector((state) => state.list)
    // const refresh_token = async () => {
    //     try {
    //         const result = await axios({
    //             method: "GET",
    //             url: "http://localhost:3400/test",
    //             timeout: 120000,
    //              });
    //         console.log(result);
    //     } catch (error) {
            
    //     }
    // }
  const navigate = useNavigate();
  console.log(sessionStorage.getItem('id'));
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }
  //console.log('idnya = '+sessionStorage.getItem('id'))
  useEffect(() => {
    if (!typeof window) {
      window.addEventListener("resize", handleResize);
    }

    if (!localStorage.getItem('token')) {
      navigate('/');
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    
    return (
       <div>
        <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{<Outlet />}</div>
      </main>
       </div>
    );
}

export default Layout;
