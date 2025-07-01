"use server"
import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// putting this "use server" at the top of this file marks all exports of this file as a server action
export type Errors = {
   title?: string;
   price?: string;
   description?: string;
}
export type FormState = {
  errors: Errors;
}
   export async function createProduct(prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string
        // when someone submits a form, the function automatically receives the formData
          const errors: Errors = {};
          if(!title){
            errors.title = "Title is required"
          }
          if(!price){
           errors.price = "Price is required"
          }
          if(!description){
           errors.description = "Description is required"
          }
          if(Object.keys(errors).length > 0){
            return { errors: errors };
          }
          await addProduct(title, parseInt(price), description)
          redirect("/products-db")
    }
     export async function editProduct(id: number, prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string
        // when someone submits a form, the function automatically receives the formData
          const errors: Errors = {};
          if(!title){
            errors.title = "Title is required"
          }
          if(!price){
           errors.price = "Price is required"
          }
          if(!description){
           errors.description = "Description is required"
          }
          if(Object.keys(errors).length > 0){
            return { errors: errors };
          }
          await updateProduct(id, title, parseInt(price), description)
          redirect("/products-db")
    }
export async function removeProduct(id: number){
        deleteProduct(id)
        revalidatePath("/products-db") // We are telling nextJS to refetch data for products-db path after deletion
    }