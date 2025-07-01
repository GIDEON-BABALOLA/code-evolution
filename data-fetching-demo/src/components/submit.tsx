      
"use client"
import { useFormStatus } from "react-dom"
import { useEffect } from "react"
export const Submit = () => {
const { pending, data, method, action } = useFormStatus()
useEffect(() => {
  if(pending){
console.log(data, method, action)
  }
},  [pending])
return  <button
        type="submit"
        disabled={pending}
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
    Submit
      </button>
      }