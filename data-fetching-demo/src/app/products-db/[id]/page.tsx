import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import { notFound } from "next/navigation";
import { Product } from "../page";
export default async function  EditProductPage({ params }: { params: Promise<{ id: string}>}){
    // First error, we cannot use the await keyword first, as client components cannot be async component
  const { id } = await params
  const product: Product | null = await getProduct(parseInt(id))
  if(!product){
     notFound()
  }
     return (
<EditProductForm product={product}/>
     )
}