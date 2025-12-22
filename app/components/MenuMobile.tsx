"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggle } from "../redux/slices/toggleMenuSlice";

const MenuMobile = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { toggleMenu } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        dispatch(toggle(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  useEffect(() => {
    const menu = document.querySelector(".isToggleMenu");
    menu?.classList.toggle("blur-[20px]", toggleMenu);
    document.body.classList.toggle("overflow-hidden", toggleMenu);
  }, [toggleMenu]);

  return (
    <div
      className={`fixed inset-0 z-999 flex transition-all duration-200 ${
        toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex-1 bg-transparent"></div>

      <div
        ref={menuRef}
        className={`relative h-full bg-white/85 shadow-xl transition-all duration-200 overflow-y-auto
            ${toggleMenu ? "w-90 max-sm:w-67.5 opacity-100" : "w-0 opacity-0"}
          `}
      >
        {/* CLOSE */}
        <button
          onClick={() => dispatch(toggle(false))}
          className="absolute top-7.5 right-7.5 w-11 h-11 rounded-full bg-[#FF4A52]
              flex items-center justify-center shadow-lg hover:-translate-y-1 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* MENU */}
        <ul className="mt-15 mb-10 px-10 space-y-2">
          {[
            "Home",
            "Tour",
            "Booking",
            "Destinations",
            "Pages",
            "Blog",
            "Shortcodes",
            "Shop",
          ].map((item) => (
            <li key={item}>
              <a
                href="/"
                className="block text-2xl font-extrabold py-1 hover:text-[#FF4A52] transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
