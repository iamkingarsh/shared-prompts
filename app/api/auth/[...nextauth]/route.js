import { connectToDatabase } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import  {connectToDatabase} from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    async session({session}) {

    },
    async signIn({profile}){

        try {
           await connectToDatabase();

           // Check if user exists in database

              // If user exists, return true
                // If user does not exist, create user and return true

        } catch (error) {
            
        }
    }
});

export {handler as GET, handler as POST}
