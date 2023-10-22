import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md";
import { BiSolidCalculator } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo.svg";
import { useEffect, useState } from "react";

const SideBar = () => {
  const pathname = useLocation();
  
  const handler = () => {
    if (+sessionStorage.getItem('role') === 1) {
      console.log('aaaa = '+sessionStorage.getItem('role'));
      setlistmenu([
        { to: "home", path: "/home", name: "home", icon: <MdCottage /> },
        {
            to:'posting', 
            path:'/posting', 
            name:'posting',
            icon: <MdCategory />,
          },
        {
          to:'listposting', 
          path:'/listposting',
          name:"list Posting",
          icon: <MdGroup />,
        },
        {
          to:'about', 
          path:'/about', 
          name:"about",
          icon: <MdShopTwo />,
        },
        {
          to:'logout', 
          path:'/logout', 
          name:'logout',
          icon: <MdCategory />,
        }
      ])
      // const listMenu = [
      //   { to: "home", path: "/home", name: "home", icon: <MdCottage /> },
      //   {
      //       to:'posting', 
      //       path:'/posting', 
      //       name:'posting',
      //       icon: <MdCategory />,
      //     },
      //   {
      //     to:'listposting', 
      //     path:'/listposting',
      //     name:"list Posting",
      //     icon: <MdGroup />,
      //   },
      //   {
      //     to:'listproduct', 
      //     path:'/listproduct', 
      //     name:"listproduct",
      //     icon: <MdShopTwo />,
      //   },
      //   {
      //     to:'parent', 
      //     path:'/parent', 
      //     name:'parent',
      //     icon: <MdCategory />,
      //   }
      // ];
    }
    else{
      console.log('adws')
      setlistmenu([
        { to: "home", path: "/home", name: "home", icon: <MdCottage /> },
        
        {
          to:'about', 
          path:'/about', 
          name:'about',
          icon: <MdCategory />,
        },
        {
          to:'logout', 
          path:'/logout', 
          name:'logout',
          icon: <MdCategory />,
        }
      ]);
    }
  }
  const [listMenu, setlistmenu] = useState([]);
  

  useEffect(() => {
    handler();
  }, []);




  // const listMenu = [
  //   { to: "home", path: "/home", name: "home", icon: <MdCottage /> },
  //   {
  //       to:'posting', 
  //       path:'/posting', 
  //       name:'posting',
  //       icon: <MdCategory />,
  //     },
  //   {
  //     to:'listposting', 
  //     path:'/listposting',
  //     name:"list Posting",
  //     icon: <MdGroup />,
  //   },
  //   {
  //     to:'listproduct', 
  //     path:'/listproduct', 
  //     name:"listproduct",
  //     icon: <MdShopTwo />,
  //   },
  //   {
  //     to:'parent', 
  //     path:'/parent', 
  //     name:'parent',
  //     icon: <MdCategory />,
  //   }
  // ];

  return (
    <div className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src={Logo} alt="company" />
      </div>

      <div className="flex flex-col">
        {listMenu &&
          listMenu.map((mn) => (
            <Link to={`${mn.to}`}>
              <div
                className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  pathname === "/"
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                <div className="mr-2">{mn.icon}</div>
                <p>{mn.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

SideBar.displayName = "SideBar";

export default SideBar;