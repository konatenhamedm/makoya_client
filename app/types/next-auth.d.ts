import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      accessToken?: string;
      image:string
    };
    data: {
      username: string;
      email: string;
      reference: string;
      type: string;
      nomComplet: string;
      image: string
    }
  }
}
