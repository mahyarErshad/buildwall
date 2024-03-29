import React, { memo, useState } from "react";
import { Transition } from "@headlessui/react";
import NavLink from "../NavLink/NavLink";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/images/logo.webp";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = () => {
    return (
      <>
        <NavLink text="صفحه اصلی" href="#home" />
        <NavLink text="پیش نمایش ها" href="#demos" />
        <NavLink text="صفحات سفارشی" href="#custom-pages" />
        <NavLink text="صفحه مقالات" href="#blog-pages" />
        <NavLink text="صفحات فروشگاهی" href="#store-pages" />
      </>
    );
  };
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-secondary shadow-lg z-50 fixed top-0">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse max-lg:justify-between lg:justify-end lg:gap-24 h-16">
          <div className="-mr-2 flex lg:hidden">
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
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
