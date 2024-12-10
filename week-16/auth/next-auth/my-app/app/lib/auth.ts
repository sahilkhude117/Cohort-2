import { CredentialsProvider } from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: "Email", type: 'text', placeholder:"email" },
                password: {label:"Password", type: "password", placeholder:"password"},
            },
            async authorize(credentials: any){
                const username = credentials.username;
                const password = credentials.password;
                //db find call

                return {
                    id: "user" //thing to be stored as token in cookie we pass it here
                };
            },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt : ({token,user}) => {
            console.log(token);
            return token;
        },
        session: ({session,token,user}:any) => {
            if(session && session.user){
                session.user.id = token.userId
            } 
            return session;
        }
    }
}