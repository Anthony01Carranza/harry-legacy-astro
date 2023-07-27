import { Dialog } from "@headlessui/react";
import { useState } from "react";

export const MobileHeader = () => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center fixed top-0 w-screen justify-end max-[440px]:mt-3 mt-4   text-orange-500 z-40"
        onClick={() => SetIsOpen(true)}
      >{/*pr-9 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="max-[840px]:w-10 max-[840px]:h-10 hover:text-blue-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <Dialog open={isOpen} onClose={() => SetIsOpen(false)}>
        <Dialog.Panel className="  fixed top-0 left-0 h-screen w-screen bg-center bg-cover bg-[url('/assets/mobile-menu-bg.jpg')]  bg-slate-700 bg-no-repeat bg-border  text-orange-600 flex flex-col z-50">
          <div className=" h-screen w-screen  max-[440px]:h-full max-[440px]:w-full bg-no-repeat bg-[url('/assets/square-border-frame.png')] bg-cover bg-center  ">
            <div className="flex items-center  justify-end  w-full  mt-4 pr-9  relative ">

              <button
                onClick={() => SetIsOpen(false)}
                className="flex items-center justify-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.75"
                  stroke="currentColor"
                  className=" max-[840px]:w-10 max-[840px]:h-10 fixed top-[40px] z-50 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="  flex items-center flex-col mt-11 z-40 ">
                <img className=" w-2/4 mb-10" src="./assets/hero-logo.webp" alt="" />
                <nav className=" flex flex-col text-center">
                    <a className=" text-orange-400 hover:scale-110 hover:text-amber-700 max-[840px]:text-3xl mb-7" href="/">Home</a>           
                    <a className=" text-orange-400 hover:scale-110 hover:text-amber-700 max-[840px]:text-3xl " href="/blog">Blog</a>
                    
                </nav>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
