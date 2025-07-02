import React from 'react'
import { auth, currentUser } from "@clerk/nextjs/server"
export default async function DashboardPage() {
const authObj = await auth() // This will return the auth object of the currently active user
const userObj = await currentUser() // This will return the backend object of the currently active user
// In server component and route handlers, you will typically use the userId and auth object and query the database with it
// Now these two helpers Auth and current user are useful in server components and route handlers but don't work in client components, in client component you can read the same data using use(auth) and use(currentUser)
console.log({authObj, userObj})
  return (
    <div>Dashboard</div>
  )
}
