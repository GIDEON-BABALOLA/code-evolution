"use client"
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs"
export const Counter = () => {
    // const { isLoaded, userId, sessionId, getToken } = useAuth() , You can rely on useAuth if you just need the userId to personalize expriences or associate data with the user
    const { isLoaded, isSignedIn, user } = useUser() // use useUser only if you need the full user object
    const [count, setCount] = useState(0);
    // if(!isLoaded || !userId){
    //     return null;
    // }
    if(!isLoaded || !isSignedIn){
        return null
    }
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}