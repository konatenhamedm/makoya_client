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

interface RecenteActivite2Props {
  firstTitle: string;
  etat: boolean;
}

const RecenteActivite2: React.FC<RecenteActivite2Props> = ({
  firstTitle,
  etat,
}) => {
  useEffect(() => {
    initTE({ Rating });
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  });

  return (
    <div className="flex flex-col w-full py-3.5 mt-6 px-4 gap-0.5 grid pb-2.5 md:grid-cols-1">
      <h1 className="font-semibold text-2xl ">{firstTitle}</h1>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActiviteBloc
          image="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          titre="Prestataire"
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
          titre="Prestataire"
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
          titre="Prestataire"
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
          titre="Prestataire"
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
            titre='Prestataire'
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
                <div className="flex flex-col gap-1 grid grid-cols-1">
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

export default RecenteActivite2;
