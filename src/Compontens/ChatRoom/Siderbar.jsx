import { useContext, useState, useEffect } from "react";
import { FaBars, FaCalendarAlt, FaAngleRight } from "react-icons/fa";
import { AuthContenxt } from "../../context/AuthProvider";
import { AlignLeftOutlined } from "@ant-design/icons";
import RomList from "./RoomList";

function SiderBar() {
  const [isMenu, setMenu] = useState(false);
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContenxt);
  const handleMenu = () => {
    setMenu(!isMenu);
  };
  const handleLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="menuBar ">
        <FaBars
          className="cursor-pointer md:hidden absolute md:top-[7px] md:left-2 left-1 top-1 "
          onClick={handleMenu}
        />
      </div>
      <div
        className={`h-screen w-full bg-white text-black md:relative absolute z-10 md:block duration-100 ${
          isMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className=" flex md:flex-row flex-col md:justify-between md:items-center md:py-4 md:mx-4 py-3 mx-2 gap-2 relative ">
          <FaAngleRight
            className="md:hidden absolute top-0 right-[-15px] cursor-pointer hover:opacity-20 text-amber-800 txt-lg "
            onClick={handleMenu}
          />
          {/* image */}
          <div className="flex items-center gap-3">
            <img
              className="w-11 h-11 rounded-full cursor-pointer duration-100"
              src={photoURL}
              alt="userImage"
            />
            <span>{displayName}</span>
          </div>
          <div>
            <button className="text-white bg-zinc-700" onClick={handleLogOut}>
              Đăng xuất
            </button>
          </div>
        </div>
        <RomList />
      </div>
    </>
  );
}

export default SiderBar;
