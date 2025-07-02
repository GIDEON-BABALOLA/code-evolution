"use client"
import { useState } from "react"
import { ServerComponentOne } from "./server-component-one"
// import { ClientComponentTwo } from "./client-component-two"
export const ClientComponentOne = ({ children }: {
    children: React.ReactNode
}) => {
    const [name, setName] = useState("Batman")
    return <>
    <h1>Client component one</h1>
    {children} 
    {/* error can't resolve fs will be thrown here because every descendant of a client component becomes a client component */}
    
    {/* <ClientComponentTwo /> */}
    </>
}
// importing of server component into client component is not allowed in nextJS, but don't worry, there is a neat work around
// instead of nesting the server component, pass it as a prop to the client component, a common approach is using react children prop to create what is called a slot  