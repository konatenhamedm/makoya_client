"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "./CategoryBox";
import { useEffect, useState } from "react";
import { BASE_SITE, axiosAuthapi } from "@/lib/axios";
import { categorie } from "@/modeles/Categorie";
import GrandTitre from "./GrandTitre";
import DrawerCategorie from "./DrawerCategorie";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside hhhhhh",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const [categorie, setCategorie] = useState<categorie[]>([]);

  if (!isMainPage) {
    return null;
  }

  useEffect(() => {
    axiosAuthapi
      .get<categorie[]>("/categorie")
      .then((res) => setCategorie(res.data.data))
      .catch((err) => {
        //setError(err.message);
      });
  }, []);

  return (
    <div>
      <div className="w-full md:w-full px-4  bg-gradient-to-tr from-red-300 to-yellow-200 pb-4 pt-1 rounded-lg">
        <div className=" my-8">
          {/* <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-medium text-white">
              Nos catégories
              <a href="#" className="">
                <span className="text-salmon font-medium text-lg text-white ml-2 hover:underline">
                  Voir tout
                </span>
              </a>
            </h2>
            <div>
              <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
              <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
            </div>
          </div> */}
          <GrandTitre titre="Nos catégories" lien="#" color="#fff" />

          <div className="grid grid-cols-10 gap-4">
            {categorie.map((item) => (
              <CategoryBox
                key={item.id}
                label={item.libelle}
                image={`${BASE_SITE}` + item.imageLaUne.fileNamePath}
                selected={category === item.libelle}
              />
            ))}

            <button
              type="button"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <CategoryBox
                key="all"
                label="Toutes les catégories"
                image="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hk_showmore.svg"
                selected={category === "all"}
              />
            </button>
          </div>
        </div>
      </div>
      <DrawerCategorie />
      {/*  Top drawer # Use this */}
    </div>

    /* 
    <div
      className="
          pt-4
          px-4
          pb-10
          flex 
          grid grid-cols-10 gap-4
          w-full
          items-center 
          justify-between
          overflow-x-auto
        "
    >
      {categorie.map((item) => (
        <CategoryBox
          key={item.id}
          label={item.libelle}
          image={`${BASE_SITE}` + item.imageLaUne.fileNamePath}
          selected={category === item.libelle}
        />
      ))}
    </div> */
  );
};

export default Categories;
