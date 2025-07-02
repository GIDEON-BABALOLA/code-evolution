// This becomes a client component handling the mutations and optimistic updates, this will receive data from the parent server component instead
"use client"
import { useOptimistic } from "react";
import  Link  from "next/link";
import { removeProduct } from "@/actions/products";
import Form from "next/form";
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null
}
export const ProductDetail = ({ products }: { products: Product[]}) => {
const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
return currentProducts.filter(product => product.id !== productId)
}); // This hook takes two parameters, the first parameter is the initial state that we want to optimistically update, the second parameter is a function that determine how to update the state optimistically, the function takes two states, the current state, and an additional argument that will help to create the new state, what gets returned is the optimistic state. The optimistic hook itself returns two things, 1) first is the resulting optimistic states, second is a function to trigger the optimistic updates. This function takes one argument of any type and will call the update function that we have defined as the second argument we have defined to useOptimistic
const removeProductById = async (productId:  number) => {
   setOptimisticProducts(productId)
   await removeProduct(productId)
}
return (
    <ul className="space-y-4 p-4">
{optimisticProducts.map((product) => (
    <li
    key={product.id}
    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
    >
  <h2 className="text-xl font-semibold">
    <Link href={`/products-db/${product.id}`}>{product.title}</Link></h2>
  <p>{product.description}</p>
  <p className="text-lg font-medium">${product.price}</p>
  {/* Here we are unable to use onClick, because we do not want to turn our server component into a client component, so we will go with a form */}
  <Form action={removeProductById.bind(null, product.id)}> 
    {/* This makes productId available as the first argument to remove product */}
  <button
  type="submit"
  className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-400"
  >
Delete
  </button>
  </Form>
    </li>
))}
    </ul>
)
}
// Also note that we will always be seperating our data fetching from our data mutations logic