import React from "react";
import { FaBell } from "react-icons/fa";

import { MdBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center z-10">
      <Link to="/">
        {" "}
        <img
          className="max-w-[150px]"
          src="../../public/netflix.png"
          alt="netflix"
        />
      </Link>
      <div className="flex items-center gap-5">
        <Link to="/watchlist">
          <MdBookmarks size={28} color="gray" />
        </Link>
        <FaBell size={24} color="gray" cursor={"pointer"} />
        <img
          className="size-10 md:size-12 border-2 border-red-500 rounded-full"
          src="../../public/user-avatar.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
