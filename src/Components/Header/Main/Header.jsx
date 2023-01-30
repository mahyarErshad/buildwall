import React, { memo, useState } from "react";
import { Transition } from "@headlessui/react";
import NavLink from "../NavLink/NavLink";
import logo from "../../../assets/images/logo.webp";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = () => {
    return (
      <>
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />
      </>
    );
  };
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-secondary fixed">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center justify-between h-16">
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md hover:text-primary transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
              <div className="w-[1.5625rem] h-[1.5625rem] relative">
                <span className={`h-1 w-full transition-all duration-500 bg-white block absolute ${!isOpen && "top-0"} ${isOpen && "rotate-[50deg] top-[10px]"}`}></span>
                <span className={`h-1 w-full transition-all duration-500 bg-white block absolute top-[37%] ${isOpen && "opacity-0"}`}></span>
                <span className={`h-1 w-full transition-all duration-500 bg-white block absolute ${!isOpen && "top-[18px]"} ${isOpen && "rotate-[-50deg] top-[10px]"}`}></span>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <ul className="ml-10 flex items-baseline gap-10">
                <NavLinks />
              </ul>
            </div>
          </div>
          <div onClick={() => window.scrollTo({ top: 0 })} className="flex-center h-full cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        {() => (
          <div className="lg:hidden -mt-1" id="mobile-menu">
            <div ref={React.createRef()} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinks />
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default memo(Header);
