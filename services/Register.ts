import { axiosAuthapi } from "@/lib/axios";
import { Civilite } from "@/modeles/Civilite";

export const getCivilte = async () => {// Promise<Civilite[]>
    const res = await axiosAuthapi
    .get<Civilite[]>("/civilite").then((res) => {
        console.log(res.data);  
    })
   
  return res;
   
    // client.setHeader("x-api-key", apiKey);
  // return res ;
  };  // return makeGraphQLRequest(getUserQuery, { email });

  