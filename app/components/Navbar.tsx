"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { toggle } from "@/app/redux/slices/toggleMenuSlice";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

const MENU = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tours",
    href: "/tours",
  },
  {
    label: "Booking",
    href: "/booking",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Pages",
    href: "/pages",
    subMenus: [
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    subMenus: [
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    subMenus: [
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
      {
        label: "Home 1 – Background Image",
        href: "",
      },
    ],
  },
];

const Navbar = () => {
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const oldScrollY = useRef(0);

  const [scrollState, setScrollState] = useState<"top" | "up" | "down">("top");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollState("top");
      } else if (currentScrollY > oldScrollY.current && currentScrollY >= 200) {
        setScrollState("down");
      } else {
        setScrollState("up");
      }

      oldScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-99 h-18.5">
      <div
        ref={headerRef}
        className={clsx(
          "transition-all duration-500 px-22.5 max-lg:px-7.5",
          scrollState === "top" && "bg-transparent",
          scrollState === "up" && "bg-white",
          scrollState === "down" && "-translate-y-25 opacity-0"
        )}
      >
        <div className="max-w-311.25 mx-auto flex justify-between items-center h-18.5">
          {/* LOGO */}
          <div
            className={clsx(
              "w-23 h-5.5 bg-cover transition-all",
              scrollState === "up"
                ? "bg-[url('../assets/logo-black.png')]"
                : "bg-[url('../assets/logo.png')]"
            )}
          />

          {/* NAV */}
          <div className="flex items-center">
            <ul className="flex max-[860px]:hidden">
              {MENU.map((item, idx: number) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={idx} className="relative group">
                    <Link
                      href={item?.href}
                      className={clsx(
                        "flex items-center px-4 py-6 text-[13px] font-medium transition-colors",
                        isActive
                          ? "text-[#FF4A52]"
                          : scrollState === "up"
                          ? "text-black"
                          : "text-white"
                      )}
                    >
                      {item?.label}

                      {!!item?.subMenus?.length && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-3.25 h-3.25 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* SUBMENU */}
                    {!!item?.subMenus?.length && (
                      <ul className="absolute -left-5 top-full min-w-60 bg-white rounded-md shadow-xl opacity-0 invisible scale-90 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-150 ease-out p-4">
                        {item.subMenus.map((subMenu, idx: number) => (
                          <Fragment key={idx}>
                            <li
                              className={clsx(
                                "cursor-pointer block py-2.5 text-black text-left text-[13px] font-semibold no-underline transition-colors duration-200 hover:text-[#FF4A52]"
                              )}
                            >
                              {subMenu?.label}
                            </li>
                            {item?.subMenus?.length !== idx + 1 && <hr />}
                          </Fragment>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* MENU ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={clsx(
                "w-5 h-5 ml-4 cursor-pointer",
                scrollState === "up" ? "text-black" : "text-white"
              )}
              onClick={() => dispatch(toggle(true))}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* CART */}
            <div className="relative ml-4">
              <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] rounded-full bg-red-500 text-white flex items-center justify-center">
                0
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={clsx(
                  "w-5 h-5 cursor-pointer",
                  scrollState === "up" ? "text-black" : "text-white"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
