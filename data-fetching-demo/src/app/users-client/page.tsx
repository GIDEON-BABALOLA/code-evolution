"use client"
import { useState, useEffect } from "react"
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
export default function UsersClient() {
const [users, setUsers] = useState<User[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState("")
useEffect(() => {
async function fetchUsers() {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/users")
if(!response.ok) throw new Error("Failed to fetch users");
const data = await response.json();
setUsers(data)
    }catch(err){
if(err instanceof Error){
    setError(err.message)
}else{
    setError("An unknown error occured")
}
    } 
    finally{
        setLoading(false)
    }
}
fetchUsers()
}, []);
if(loading) return <div>Loading...</div>;
if(error) return <div>{error}</div>
return (
    <ul className="space-y-4 p-4">
{users.map((user) => (
    <li key={user.id}
    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
    >
<div className="font-bold">{user.name}</div>
<div className="text-sm">
<div>Username: {user.username}</div>
<div>Email: {user.email}</div>
<div>Phone: {user.phone}</div>
</div>
    </li>
))}
    </ul>
)
}

// Here is the thing though, you should only use client component for data fetching when you absolutely need to, like when you need real time updates or when your data depend on client side interactions that you can't predict on the server side,  for everything else, the recommended way to fetch data is through server components which we will cover next