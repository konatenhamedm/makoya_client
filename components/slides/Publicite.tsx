"use client";
import React, { useEffect } from "react";
import DataSlide from "./DataSlide";
import "flowbite";
import { initFlowbite } from "flowbite";
import Caroussel from "./Caroussel";
import SideSlide from "./SideSlide";
import { Button } from "@nextui-org/react";

function Publicite() {
  useEffect(() => {
    initFlowbite();
  });
  return (
    <div className="flex flex-col w-full pt-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-4">
      <div className="col-span-3 lg:col-span-3">
        <Caroussel />
      </div>
      <div className="h-[255px]">
        {/*  <div className="block max-w-sm   rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="px-2 py-3 text-black w-full text-sm bg-transparent outline-none"
                id="exampleInput90"
                placeholder="Name"
              />
            
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="px-2 py-3 text-black w-full text-sm bg-transparent outline-none"
                id="exampleInput91"
                placeholder="Email address"
              />
            
            </div>

            <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
         
            </div>

            <button
              type="submit"
              className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 font-[sans-serif] p-6 h-[255px]">
          <div className=" mx-auto flex flex-col justify-center items-center">
            <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
              Annoncer
            </h3>
            <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
              gratuitement ici
            </h3>
            {/*   <p className="text-white text-base text-center mb-6">
              Elevate your style with our latest arrivals.
            </p> */}
            {/*    <a
              href="javascript:void(0)"
              className="bg-white w-full text-sm text-blue-600 font-semibold py-2 px-4 justify-center items-center rounded hover:bg-slate-100"
            >
             
            </a> */}
            <Button
              className="text-white w-full mt-10"
              color="warning"
              radius="full"
              size="lg"
            >
              Créer un compte gratuitement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publicite;
