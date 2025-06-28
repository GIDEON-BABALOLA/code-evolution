"use client" // Allows us to cross the boundary from server to client side
import { useState } from "react";
export default function DashboardPage() {
console.log("Dashboard client component")
const [name, setName] = useState<string>("");
  return (
    <div>
        <h1>Dashboard</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello, {name}!</p>
    </div>
  )
}
 