'use client'
import React from 'react'
/* import { TERipple } from 'tw-elements-react'; */
import { AcmeLogo } from '../subcomponents/AcmeLogo';
import { NavbarBrand, NavbarContent } from '@nextui-org/react';
import Autocompletes from './autocompletes';
import { TERipple } from 'tw-elements-react';

function Search () {
  return (
    <>
<NavbarBrand className="mr-4">
         <AcmeLogo /> 
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-2">
      <div className="relative ville flex flex-wrap items-stretch">
  {/*   <input
                      type="search"
                      className="relative m-0 -mr-0.5 block w-[100px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Ville"
                      aria-label="Search"
                      aria-describedby="button-addon1" /> */}
                      <Autocompletes />
      </div>
      <div className="w-96">
              <div className="relative  flex w-full flex-wrap items-stretch">
              
                  <input
                      type="search"
                      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon1" />

                  <TERipple color='light'>
                  <button
                      className="relative z-[2] flex items-center rounded-r bg-warning px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-warning-700 hover:shadow-lg focus:bg-warning-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-warning-800 active:shadow-lg"
                      type="button"
                      id="button-addon1">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5">
                          <path
                              
                              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                             />
                      </svg>
                  </button>
                  </TERipple>
              </div>
      </div>
      </NavbarContent>
    </>
  )
}

export default Search