"use client";
import Navbar from "@/components/profile/Navbar";
import Sidebar from "@/components/profile/Sidebar";
import React from "react";
export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-500 ">{children}</div>;
}
