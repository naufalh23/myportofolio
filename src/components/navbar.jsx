"use client";

import { useEffect, useState } from "react";

export default function Navbarcomp() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 h-[80px] z-[9999] ">
      <nav
        className={`transition ease-in-out duration-150 border-primary border-b-2 dark:bg-gray-900 ${
          isSticky ? "shadow-md bg-boxproject" : "bg-boxproject"
        }`}
      >
        <div className="flex items-center justify-around w-full p-4">
          <div className="flex justify-between w-full items-center ml-10">
            <a
              href={"#"}
              className="flex items-center space-x-3 rtl:space-x-reverse text-primary font-bold text-2xl"
            >
              Naufal Hesantra
            </a>
          </div>
          <ul className="flex text-white px-10 font-semibold text-lg">
            <a href='#' className="mx-2 hover:border-gray-300 hover:bg-slate-500/50 hover:rounded px-2">Home</a>
            <a href='#project' className="mx-2 hover:border-gray-300 hover:bg-slate-500/50 hover:rounded px-2" px-2>Service</a>
            <a href='#porto' className="mx-2 hover:border-gray-300 hover:bg-slate-500/50 hover:rounded px-2">Project</a>
            <a href='#contact' className="mx-2 hover:border-gray-300 hover:bg-slate-500/50 hover:rounded px-2">Contact</a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
