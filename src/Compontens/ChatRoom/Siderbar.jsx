import { useContext, useState, useEffect } from "react";
import { FaBars, FaCalendarAlt, FaAngleRight } from "react-icons/fa";
import { AuthContenxt } from "../../context/AuthProvider";
import { AlignLeftOutlined } from "@ant-design/icons";

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
      if (window.innerWidth < 768) {
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
    <div className="h-screen">
      <FaBars
        className="absolute text-white block cursor-pointer hover:opacity-25 mx-2 my-2 md:hidden"
        onClick={handleMenu}
      />
      <div
        className={`md:w-full h-full bg-white rounded-sm relative rounded md:block ease-in-out duration-500 ${
          !isMenu ? "left-[-100%] " : " left-0 "
        }`}
      >
        <FaAngleRight
          className="text-black text-xl absolute right-[-4px] top-1 md:hidden cursor-pointer hover:opacity-25"
          onClick={handleMenu}
        />
        <div className="md:px-2 md:py-3 px-2 py-3 flex-col gap-2 w-full flex justify-between  ">
          {/* imageUser */}
          <div className="w-full flex gap-2 items-center md:gap-7 text-black">
            <img
              className=" md:w-7 w-7 rounded-full object-cover "
              src={photoURL}
              alt="user"
            />
            <span className="text-sm md:text-lg">{displayName}</span>
          </div>
        </div>
        <button
          className="mx-2 text-sm md:text-lg text-white "
          onClick={handleLogOut}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default SiderBar;
