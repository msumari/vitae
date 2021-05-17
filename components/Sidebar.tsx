import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/sule.png?alt=media&token=1d4f9522-08dc-4665-b81d-9adcc1115323"
        alt="Suleiman Msumari"
        className="h-40 mx-auto rounded-full w-38"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Suleiman </span>Msumari
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
      >
        <GiTie className="w-6 h-6" />
        Download resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-red-500 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200 sytle={{marginLeft: '-1rem', marginRigth:'-1rem'}}">
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>Dar es salaam, Tanzania</span>
        </div>
        <p className="my-2">suleykhery@gmail.com</p>
        <p className="my-2">+255 623404211</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-700 to-yellow-800">
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-700 to-yellow-800">
        Dark mode
      </button>
    </div>
  );
};

export default Sidebar;