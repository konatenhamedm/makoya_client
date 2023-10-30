"use client";
import React, { useEffect, useState } from "react";
import Infos from "./Infos";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import DrawerView from "./DrawerView";

function Header2() {
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState(session);

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    setCurrentUser(session);
  });
  return (
    /*   <> */
    <header className="shadow-sm bg-white font-[sans-serif] min-h-[70px] fixed border-b-[1px] top-0 left-0 right-0 z-40 mb-12">
      <section className="bg-[#0F1111] max-h-[40px] px-1 py-2 sm:px-10 flex items-center max-sm:flex-col  ">
        {/*  <button type="button" className="text-white text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            className="mr-3 inline-block"
            viewBox="0 0 482.6 482.6"
          >
            <path
              d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
              data-original="#000000"
            ></path>
          </svg>
          +180-548-2588
        </button> */}
        {/*  <span className="border-l h-3 mx-6 max-sm:hidden"></span> */}
        {/*   <button type="button" className="text-white text-sm max-sm:my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            className="mr-3 inline-block"
            viewBox="0 0 479.058 479.058"
          >
            <path
              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
              data-original="#000000"
            ></path>
          </svg>
          info@example.com
        </button> */}
        {/* <div className="flex items-center max-sm:ml-auto lg:order-1"> */}
        <ul className="flex lg:ml-8 max-lg:block max-lg:w-full lg:space-x-4 max-lg:space-y-2">
          <li className="max-lg:border-b max-lg:py-2 px-3">
            <a
              href="javascript:void(0)"
              className="text-[#FFA726] hover:text-[#FFA726] text-[15px] block font-semibold"
            >
              Catégorie 1
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3">
            <a
              href="javascript:void(0)"
              className="text-white hover:text-[#FFA726] text-[15px] block font-semibold"
            >
              Catégorie 2
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3">
            <a
              href="javascript:void(0)"
              className="text-white hover:text-[#FFA726] text-[15px] block font-semibold"
            >
              Catégorie 3
            </a>
          </li>
        </ul>

        {/*  <div></div>
        </div> */}
        {/* <ul className="flex lg:space-x-10 max-lg:space-y-2 max-lg:block max-lg:w-full">
          <li className="max-lg:border-b max-lg:py-2 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Shopping
            </a>
          </li>

          <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Tracking
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Support
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Account
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Places
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <a
              href="javascript:void(0)"
              className="text-white block text-[15px] font-medium"
            >
              Contact
            </a>
          </li>
        </ul> */}
        <div className="sm:ml-auto text-white">
          {/*   <button className="px-4 py-2 text-sm rounded-md font-bold border border-[#007bff] bg-transparent hover:bg-[#007bff] hover:text-white transition-all ease-in-out duration-300 text-[#007bff]">
            Download
          </button> */}
          <ul className="flex lg:space-x-10 max-lg:space-y-2 max-lg:block max-lg:w-full">
            <li className="max-lg:border-b relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300 ">
              <a
                href="/annonces"
                className="text-white block text-[15px] font-medium "
              >
                <div className="ml-4 text-xs inline-flex items-center image-clignote font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-green-400 rounded-full hover:bg-blue-600 hover:text-red-200 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-activity mr-2"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Annonces gratuites
                  {/*  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    20
                  </div> */}
                </div>
                {/* Annonces gratuites */}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4">
        <div className="flex">
          {/*  <Button >Open Drawer</Button> */}
          {/*  <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            Show navigation
          </button> */}
          <button
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a href="/" className="ml-6">
            <img
              src="http://localhost:3000/assets/appatam_logo-removebg-preview.png"
              alt="logo"
              className="w-36"
            />
          </a>
        </div>
        <div className="flex rounded-md border-none border-none overflow-hidden lg:w-2/4 max-md:w-full mx-auto font-[sans-serif]">
          {pathname === "/annonces" ? (
            <ul className="flex lg:ml-8 max-lg:block max-lg:w-full lg:space-x-4 max-lg:space-y-2">
              <li className="max-lg:border-b max-lg:py-2 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-[#FFA726] hover:text-[#FFA726] text-[15px] block font-semibold"
                >
                  Nos successs
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-black hover:text-[#FFA726] text-[15px] block font-semibold"
                >
                  Inscrivez votre entreprise
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-black hover:text-[#FFA726] text-[15px] block font-semibold"
                >
                  Faq
                </a>
              </li>
              {/* <li className="max-lg:border-b max-lg:py-2 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-black hover:text-[#FFA726] text-[15px] block font-semibold"
                >
                  Kids
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-black hover:text-[#FFA726] text-[15px] block font-semibold"
                >
                  Shops
                </a>
              </li> */}
            </ul>
          ) : (
            <>
              <select
                id="category"
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3 rounded-l-lg lg:w-1/3"
              >
                <option selected>Catégorie</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
              <input
                type="email"
                placeholder="Search Something..."
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
              />
              <select
                id="category"
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3  lg:w-1/3"
              >
                <option selected>Abidjan</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
              <button
                type="button"
                className="flex items-center justify-center bg-[#007bff] px-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="fill-white"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </button>
            </>
          )}
        </div>
        {/* <div className="bg-gray-100 flex border-2 max-md:order-1 border-transparent focus-within:border-blue-500 px-4 rounded-sm h-10 lg:w-2/4 max-md:w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-400 mr-4 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="email"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-[#333] text-sm"
          />
        </div> */}
        <div className="flex items-center space-x-8 max-md:ml-auto">
          <Infos session={session} />
        </div>{" "}
        {/* <!-- drawer component --> */}
        <DrawerView />
        {/* <React.Fragment>
          <Drawer open={open} onClose={closeDrawer}>
            <div className="mb-2 flex items-center justify-between p-4">
              <Typography variant="h5" color="blue-gray">
                Material Tailwind
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                Dashboard
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                Analytics
                <ListItemSuffix>
                  <Chip
                    value="5"
                    size="sm"
                    color="green"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                Sales
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
                Tables
              </ListItem>
            </List>
            <Button className="mt-3 ml-5" size="sm">
              Documentation
            </Button>
          </Drawer>
        </React.Fragment> */}
      </div>
    </header>
    /* </> */
  );
}

export default Header2;
