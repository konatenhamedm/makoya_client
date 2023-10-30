"use client";

import { useSession } from "next-auth/react";
import useAxiosAuth from "./useAxiosAuth";


export const useRefreshToken = ()=>{
    const { data: session } = useSession();

    const refreshToken = async ()=>{
        const axiosAuth = useAxiosAuth();
        const res = await axiosAuth.post("/auth/refresh")

        if (session) session.user = res.data.token;
    };

    return refreshToken;
};