"use client";
import PubliciteCategorie from "@/components/slides/PubliciteCategorie";
import { BASE_SITE, axiosAuthapi } from "@/lib/axios";
import { SousCategorie } from "@/modeles/SousCategorie";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function page({ params }: { params: { id: string } }) {
  const [sousCategories, setSousCategories] = useState<SousCategorie[]>([]);
  const [query, setQuery] = useState("");

  const searchFilter = (array: SousCategorie[]) => {
    return array.filter((el) => el.libelle.toLowerCase().includes(query));
  };

  const filteredsousCategories = searchFilter(sousCategories);

  //Handling the input on our search bar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axiosAuthapi
      .get<SousCategorie[]>("/sousCategorie/sous_categories/" + params.id)
      .then((res) => setSousCategories(res.data.data))
      .catch((err) => {
        //setError(err.message);
      });
  }, [sousCategories]);
  return (
    <div className="mt-12 mb-20">
      <div className="mb-10">
        <h1>Makoya</h1>
      </div>
      <PubliciteCategorie />

      <div className="grid grid-cols-3 gap-4 px-4">
        <div className="col-span-2">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
            shadow="sm"
          >
            <CardHeader className="w-full">
              {/* <p className="font-semibold text">{firstTitle}</p> */}
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    onChange={handleChange}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
                    placeholder="Recherche..."
                  />
                </div>
              </form>
            </CardHeader>
            <CardBody>
              <div className="items-center justify-center h-[400px]">
                <div className="mt-7 ">
                  <ul className="flex flex-col w-full  dark:divide-gray-700 grid grid-cols-1 sm:grid-cols-3  gap-2">
                    {filteredsousCategories &&
                      filteredsousCategories.map((souscategorie) => (
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          >
                            <img
                              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                              src="https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_schools.png?w=48&q=75"
                              alt={souscategorie.libelle}
                            />

                            <span className="ml-3">
                              {souscategorie.libelle}
                            </span>
                          </a>
                        </li>
                      ))}
                  </ul>
                  {filteredsousCategories.length === 0 && (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src="/assets/search_notfound.svg"
                        alt="Empty illustration"
                      />
                      <h1 className="text-2xl font-bold">Aucun résultat</h1>
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
          <div className="items-center justify-center">
            <div className="h-[255px]">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 font-[sans-serif] p-6 h-[255px]">
                <div className=" mx-auto flex flex-col justify-center items-center">
                  <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
                    Annoncer
                  </h3>
                  <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
                    gratuitement ici
                  </h3>

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
          <hr className="seperator" />
          <div className="items-center justify-center">
            <div className="h-[250px]">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 font-[sans-serif] p-6 ">
                <div className=" mx-auto flex flex-col justify-center items-center">
                  <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
                    Annoncer
                  </h3>
                  <h3 className="text-white text-3xl justify-center items-center font-bold mb-4">
                    gratuitement ici
                  </h3>

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
        </div>
      </div>
    </div>
  );
}

export default page;
