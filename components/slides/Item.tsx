/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import { Button, Image } from "@nextui-org/react";
import React from "react";
import Noter from "../reseaux/Noter";

interface ItemProps {
  image: string;
  title: string;
  note: number;
}
const Item: React.FC<ItemProps> = ({ image, title, note }) => {
  return (
    <div className="mx-3 max-h-[810px] flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      {/* <div className="p-1">
<div className='w-full grid grid-cols-6 justify-between'>
<div className='col-span-5'>
<h5
className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
{titre}
</h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
{serviceVille}-{serviceQuartier}
</p>

</div>
<div>
  {whatsapp ? (
    <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="mb-2 inline-block rounded px-6 py-2.5 text-xs bg-green-500 text-white font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
    </button>
): (
  ""  
) 
    }
</div>
</div>


</div> */}

      <a href="#!" className="">
        <img
          className="rounded-t-lg  object-fill h-72 w-full transition duration-300 ease-in-out hover:scale-90"
          src={image}
          alt="Hollywood Sign on The Hill"
        />
      </a>

      <div className="p-1">
        <div className="flex flex-grow gap-2 items-center justify-between">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-full h-11 bg-black"
            src={image}
          />

          {/*  <p className="text-tiny text-black">tttt</p> */}
          <div className="flex flex-col">
            {/*  <p className="text-tiny text-black">Habite : gfryu 1</p> */}
          </div>
          <Noter note={note} />
        </div>
        <h2 className="mb-1 text-xl font-bold text-center  leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h2>
        <Button
          className="text-tiny w-full"
          color="primary"
          radius="full"
          size="sm"
        >
          Voir
        </Button>
      </div>
    </div>
  );
};

export default Item;
