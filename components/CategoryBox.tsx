"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { Card } from "@nextui-org/react";

interface CategoryBoxProps {
  image: string;
  //icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  image,
  //image: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <Card
      className={`
    max-w-full w-[540px] h-[100px] items-center  pt-2.5 cursor-pointer 
    transition
    text-black
    border-none
    hover:bg-sky-500 hover:ring-sky-500 hover:text-white
    ${selected ? "border-b-neutral-800" : "border border-gray-600 ronded-lg"}
  ${selected ? "text-neutral-800" : "text-neutral-500"} */}
     `}
    >
      <div
        onClick={handleClick}
        className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        w-24
        h-24
        p-3
        flex flex-col w-full
        hover:bg-sky-500 hover:ring-sky-500 hover:text-white
        text-black
        `}
      >
        {/*  ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'} */}
        <img src={image} alt={label} width={26} height={26} />
        {/* <Icon size={26} /> */}
        <div className="categorie-label font-medium text-sm justify-center text-center">
          {label}
        </div>
      </div>
    </Card>
  );
};

export default CategoryBox;
