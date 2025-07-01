"use client"
import { Submit } from "@/components/submit";
import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";
export default function  AddProductPage(){
  const initialState: FormState = {
    errors: {},
  }
  // This hook takes two parameters, first the sever actions functions and second the initial form state
    const [state, formAction, isPending] = useActionState(createProduct, initialState) //, this hook returns an array with three things, the current form state, a new formAction, and a boolean to indicate is the status of the action
     return (
            <form 
            action={formAction}
            className="p-4 space-y-4 max-w-96">
      <div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded bg-white"
          name="title"
        />
      </label>
      {state.errors.title &&  ( <p className="text-red-500">{state.errors.title}</p> ) }
            </div>
        <div>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded bg-white"
          name="price"
        />
      </label>
      {state.errors.price && ( <p className="text-red-500">{state.errors.price}</p>) }
      </div>
      <div>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded bg-white"
          name="description"
        />
      </label>
            {state.errors.description && ( <p className="text-red-500">{state.errors.description}</p>) }
      </div>
 {/* <Submit /> */}
 <button
        type="submit"
        disabled={isPending}
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
    Submit
      </button>
      {/* <Submit /> */}
    </form>
     )
}

// Because we are using a server action in a server component, we can talk directly to the database, like having an API endpoint built right into your component

// when we use useActionState and pass in create product, the createProduct function automatically receives the previous state as the first argument