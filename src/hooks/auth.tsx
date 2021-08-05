import React, {createContext, useContext, useState, ReactNode} from "react";
import * as AuthSession from "expo-auth-session"
import { api } from "../services/api";
import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "../config/discordAuth";


type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token : string
}

type AuthContextData = {
    user: User,
    signIn: () => Promise<void>;
}

type AuthProviderProps ={
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider ({children}: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false);

    async function signIn(){
        try{
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const response = AuthSession.startAsync({authUrl});
            console.log(response);

        }catch{
            throw new Error("Não foi possível autentificar");
        }
    }

    return (
        <AuthContext.Provider value={{user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
