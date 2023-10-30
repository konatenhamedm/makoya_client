"use client";
import "../globals.css";
import Navbar from "@/components/profile/Navbar";
import Sidebar from "@/components/profile/Sidebar";
import React from "react";
import { Providers } from "../providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/session";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 pt-5 lg:mb-0 md:mb-16 px-4 bg-white">
      {/* // do this div style later (after putting the content) */}
      <div className="h-full col-span-12 p-4 text-base text-center bg-gray-100 lg:col-span-3 rounded-2xl ">
        {/* //!sidebar */}
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-gray-100 rounded-2xl dark:text-white lg:col-span-9">
        {/* //!navbar */}
        <Navbar />
        {/* //!about */}
        {children}
      </div>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
    </div>
  );
}
