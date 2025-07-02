// "use client"
// import { NavLinks } from "./nav-links"
// import { NavSearch } from "./nav-search"
// import { useState } from "react";
// export const Navbar = () => {
//     console.log("Navbar rendered");
//     const [search, setSearch] = useState("")
//   return (
//    <div>
//     <NavLinks />
//     <NavSearch />
//    </div>
//   )
// }

// When you mark a component with use client, it doesn't just affect that component, but also affect every child component in the component tree below it



import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"
export const Navbar = () => {
console.log("Navbar rendered");
  return (
   <div>
    <NavLinks />
    <NavSearch />
   </div>
  )
}
