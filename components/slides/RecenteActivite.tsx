"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Progress,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import SideActivite from "./SideActivite";
import { Rating, initTE } from "tw-elements";
import Noter from "../reseaux/Noter";
import ActiviteBloc from "./ActiviteBloc";
import GrandTitre from "../GrandTitre";

interface RecenteActiviteProps {
  firstTitle: string;
  etat: boolean;
}

const RecenteActivite: React.FC<RecenteActiviteProps> = ({
  firstTitle,
  etat,
}) => {
  initTE({ Rating });
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  });

  return (
    <div className="flex flex-col w-full py-3.5 mt-6 px-4 gap-0.5 grid pb-2.5 md:grid-cols-1">
      {/*  <h1 className="font-semibold text-2xl underline underline-offset-8">
        
      </h1> */}
      <GrandTitre titre={firstTitle} lien="#" />

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActiviteBloc
          image="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          titre="Bonne"
          commentaire="This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer."
          profil="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          nom="Konate Hamed"
          serviceVille="Daloa"
          serviceQuartier="Huberson"
          ville="Daloa"
          quartier="Soleil 1"
          note={4}
          whatsappNumber="025855578"
          whatsapp={true}
        />

        <ActiviteBloc
          image="assets/album-cover.png"
          titre="Bonne"
          commentaire="This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer."
          profil="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          nom="Konate Hamed"
          serviceVille="Daloa"
          serviceQuartier="Huberson"
          ville="Daloa"
          quartier="Soleil 1"
          note={4}
          whatsappNumber="025855578"
          whatsapp={true}
        />
        <ActiviteBloc
          image="assets/album-cover.png"
          titre="Bonne"
          commentaire="This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer."
          profil="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          nom="Konate Hamed"
          serviceVille="Daloa"
          serviceQuartier="Huberson"
          ville="Daloa"
          quartier="Soleil 1"
          note={4}
          whatsappNumber="025855578"
          whatsapp={true}
        />
        {/*  <ActiviteBloc 
            image='assets/album-cover.png' 
            titre='Bonne'
             commentaire='This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.'
              profil='https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg' 
              nom='Konate Hamed'
               serviceVille='Daloa' 
               serviceQuartier='Huberson' 
               ville='Daloa' 
               quartier='Soleil 1'
                note='4' 
                whatsappNumber='025855578'
                 whatsapp={true}/> */}

        {etat ? (
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  comment noteriez-vous votre expérience?
                </p>
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex flex-col gap-1 grid grid-cols-1 gap-2">
                  <SideActivite />
                  <SideActivite />
                  <SideActivite />
                  <SideActivite />
                </div>
              </CardBody>
            </Card>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RecenteActivite;
