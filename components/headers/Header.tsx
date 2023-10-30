"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Infos from "./Infos";
import { AcmeLogo } from "../subcomponents/AcmeLogo";
import Autocompletes from "./autocompletes";
import { TERipple } from "tw-elements-react";
import { Collapse, Dropdown, initTE, select } from "tw-elements";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { animals } from "../modals/data";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState(session);
  useEffect(() => {
    setCurrentUser(session);
  });
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
      <Navbar isBordered onMenuOpenChange={setIsMenuOpen} className=" bg-white">
        <NavbarContent className="max-w-[200px]">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className=" mt-3">
            <AcmeLogo />
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          as="div"
          className="hidden flex-col sm:flex gap-4  flex"
          justify="center"
        >
          <div className="flex flex-row">
            {/* <Autocompletes /> */}
            {/*  <form className="flex "> */}
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/*     <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                  />
                </svg> */}
                </div>
                {/*  <label className="sr-only">Choose a state</label> */}
                <select
                  id="states"
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5  text-sm rounded-l-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Catégories</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="WH">Washinghton</option>
                  <option value="FL">Florida</option>
                  <option value="VG">Virginia</option>
                  <option value="GE">Georgia</option>
                  <option value="MI">Michigan</option>
                </select>
              </div>
              <div className="relative min-w-max">
                <input
                  type="search"
                  id="search-dropdowns"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Recherche..."
                  required
                />
              </div>
              <div className="relative min-w-max">
                {/* <label className="sr-only">Choose a state</label> */}
                <select
                  id="search-dropdown"
                  className="lock p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                >
                  <option value="ABI" selected>
                    Abidjan
                  </option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="WH">Washinghton</option>
                  <option value="FL">Florida</option>
                  <option value="VG">Virginia</option>
                  <option value="GE">Georgia</option>
                  <option value="MI">Michigan</option>
                </select>
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
            {/*  </form> */}
            {/*    <Autocompletes /> */}

            {/*   <div className="relative">
             */}
            {/*  <input
              className="w-full h-12 text-sm outline-none border mt-3 rounded-lg transition-all pl-7 pr-20 focus:border-blue-600"
              type="text"
              placeholder="Search tasks like product pages,product photos etc."
            />
            <i className="absolute top-7 text-[#bfc6cd] left-2 fa fa-search"></i>
            <button className="absolute right-2 rounded-lg cursor-pointer transition-all hover:bg-blue-900 top-4 h-10 w-16 bg-blue-500 text-white text-sm">
              Search
            </button> */}
            {/* </div> */}
          </div>
        </NavbarContent>
        <NavbarContent justify="end" className="max-w-[400px]">
          <Infos session={session} />
        </NavbarContent>
        <NavbarMenu>
          <div className="flex flex-row">
            {/* <Autocompletes /> */}
            {/*  <form className="flex "> */}
            <div className="flex">
              {/*  <div className="relative max-w-xl">
              <select
                id="states"
                className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5  text-sm rounded-l-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Catégories</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="WH">Washinghton</option>
                <option value="FL">Florida</option>
                <option value="VG">Virginia</option>
                <option value="GE">Georgia</option>
                <option value="MI">Michigan</option>
              </select>
            </div> */}
              <div className="relative min-w-max">
                <input
                  type="search"
                  id="search-dropdowns"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Recherche..."
                  required
                />
              </div>
              <div className="relative min-w-max">
                {/* <label className="sr-only">Choose a state</label> */}
                <select
                  id="search-dropdown"
                  className="lock p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                >
                  <option value="ABI" selected>
                    Abidjan
                  </option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="WH">Washinghton</option>
                  <option value="FL">Florida</option>
                  <option value="VG">Virginia</option>
                  <option value="GE">Georgia</option>
                  <option value="MI">Michigan</option>
                </select>
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
            {/*  </form> */}
            {/*    <Autocompletes /> */}

            {/*   <div className="relative">
             */}
            {/*  <input
              className="w-full h-12 text-sm outline-none border mt-3 rounded-lg transition-all pl-7 pr-20 focus:border-blue-600"
              type="text"
              placeholder="Search tasks like product pages,product photos etc."
            />
            <i className="absolute top-7 text-[#bfc6cd] left-2 fa fa-search"></i>
            <button className="absolute right-2 rounded-lg cursor-pointer transition-all hover:bg-blue-900 top-4 h-10 w-16 bg-blue-500 text-white text-sm">
              Search
            </button> */}
            {/* </div> */}
          </div>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default Header;
