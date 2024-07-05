"use client";

import { NavBarItem } from "@/Utils/NavbarItems";
import { ChevronRight, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { TrackingContext } from "@/Context/trackingContext";

const Navbar = ({ ContactRef, ServicesRef, PricingRef }: any) => {
  const router = useRouter();
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState("");
  const [sideNav, setSideNav] = useState<Boolean>(false);

  const { connectWallet, currentUser }: any = useContext(TrackingContext);

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname]);

  console.log(ContactRef, ServicesRef, PricingRef);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (href.match("#Services")) {
        ServicesRef?.current?.scrollIntoView({ behavior: "smooth" });
      } else if (href.match("#Contact")) {
        ContactRef?.current?.scrollIntoView({ behavior: "smooth" });
      } else if (href.match("#Pricing")) {
        PricingRef?.current?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <div className="1024:w-full 1024:text-[14px] 600:text-[12px] 1024:h-[80px] 600:font-medium 600:leading-4 h-[80px] hidden 600:flex items-center justify-evenly px-16">
        {pathname === "/" &&
          NavBarItem.map((navlink, i) => {
            return (
              <>
                <div className="600:w-[20%] cursor-pointer overflow-hidden text-left h-[16px]">
                  <div
                    className="w-fit h-full group"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(navlink.href);
                    }}
                  >
                    <div
                      className={` w-fit cursor-pointer transition-all group-hover:-translate-y-[18px] ease-in-out`}
                    >
                      {navlink.navName}
                    </div>
                    <div className="w-fit cursor-pointer transition-all group-hover:-translate-y-[18px] ease-in-out">
                      {navlink.navName}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        <button
          onClick={() => connectWallet()}
          className="1024:px-6 1024:py-3 px-4 py-2 700:text-[12px] text-[10px] max-w-[200px] bg-gray-900 font-semibold text-white rounded-lg active:scale-95 600:flex 900:text-sm items-center overflow-hidden pr-8 truncate whitespace-nowrap"
        >
          {currentUser ? (
            <p className="justify-end flex items-center">
              {currentUser.slice(0, 13)}..
            </p>
          ) : (
            `Connect Wallet`
          )}
          <ChevronRight
            className={currentUser ? `hidden` : "block"}
            size={20}
          />
        </button>
      </div>

      {/* mobile view */}
      <div className="flex justify-between 600:hidden items-center px-8 w-full h-[60px]">
        <div>Ashish Bhatt</div>
        {sideNav ? (
          <div onClick={() => setSideNav(false)} className="text-white">
            <X />
          </div>
        ) : (
          <div onClick={() => setSideNav(true)} className="text-white">
            <Menu />
          </div>
        )}
      </div>
      <div className="border border-[#d8d8d8] w-[95%] mx-8"></div>

      {sideNav ? (
        <div className="w-full h-[90vh] bg-black/75 backdrop-blur-2xl absolute z-50 flex gap-8 justify-center flex-col text-center items-center ">
          {pathname === "/" &&
            NavBarItem.map((navlink, i) => {
              return (
                <>
                  <div className="w-full cursor-pointer flex flex-col">
                    <div
                      className="w-full h-full"
                      onClick={(e) => {
                        e.preventDefault();
                        setSideNav(false);
                        scrollToSection(navlink.href);
                      }}
                    >
                      <div className="w-full text-[24px] cursor-pointer">
                        {navlink.navName}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

          <button
            onClick={() => connectWallet()}
            className="w-1/2 px-4 py-2 bg-gray-700 font-semibold gap-1 text-white rounded-lg 600:flex 900:text-sm flex justify-center items-center"
          >
            {currentUser ? currentUser : "Connect Wallet"}
            <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
