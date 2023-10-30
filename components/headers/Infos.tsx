"use client";
import React, { useCallback, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineNotification,
  AiTwotoneNotification,
} from "react-icons/ai";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import Notification from "./Notification";
import useRentModal from "../../hooks/useRentModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface InfosProps {
  session: any;
}

const Infos: React.FC<InfosProps> = ({ session }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const router = useRouter();

  /* const onRent = useCallback(() => {
    if (!session) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, session]); */

  return (
    <>
      {session ? (
        <>
          <div
            className=" hidden
      md:block
      text-sm 
      font-semibold 
      py-3 
      px-4 
      rounded-full 
      hover:bg-neutral-100 
      transition 
      cursor-pointer"
          >
            {session.user.name}
          </div>
          {/* <AiTwotoneNotification />
      
      <AiOutlineNotification /> */}
          <Notification />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Makoya"
                size="sm"
                src={session.user.image}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                {/*  <p className="font-semibold">Signed in as</p> */}
                <p className="font-semibold">{session.user.email}</p>
              </DropdownItem>
              <DropdownItem
                key="settings"
                onClick={() => router.push("/profile/home")}
              >
                Tableau de bord
              </DropdownItem>
              <DropdownItem key="team_settings">Favories</DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              >
                Se deconnecter
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      ) : (
        <>
          <div className="flex ">
            <Notification />
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-sky-500  border-none rounded-md hover:bg-warning text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 "
              /* onClick={rentModal.onOpen} */
              onClick={loginModal.onOpen}
            >
              {/*  <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
    </svg> */}
              Login / S'inscrire
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Infos;
