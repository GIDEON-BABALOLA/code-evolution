"use client"
import { useActionState } from "react";
import { Product } from "@/app/products-db/page";
import { FormState, editProduct } from "@/actions/products";
export default  function  EditProductForm({ product }: {product: Product}){
  const initialState: FormState = {
    errors: {},
  }
  const editProductWithId = editProduct.bind(null, product.id)
    //  This makes productId available as the first argument to editProduct
  // This hook takes two parameters, first the sever actions functions and second the initial form state
    const [state, formAction, isPending] = useActionState(editProductWithId, initialState) //, this hook returns an array with three things, the current form state, a new formAction, and a boolean to indicate is the status of the action
     return (
            <form 
            action={formAction}
            className="p-4 space-y-4 max-w-96">
              {/* <input type="hidden" name="id" value={product.id}/> we could us this but we will use Typescript bind method*/} 
      <div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded bg-white"
          name="title"
          defaultValue={product.title}
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
          defaultValue={product.price}
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
          defaultValue={product.description ?? ""} // since description is either string or null, we provide empty string as the default value
        />
      </label>
            {state.errors.description && ( <p className="text-red-500">{state.errors.description}</p>) }
      </div>
 <button
        type="submit"
        disabled={isPending}
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
    Submit
      </button>
    </form>
     )
}