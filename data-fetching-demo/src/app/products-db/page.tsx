// This will now be a server component in charge of only data fetching
import { getProducts } from "@/prisma-db" //@ is the same thing as source
import { ProductDetail } from "./product-detail";
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null
}
export default async function ProductsDBPage({
    searchParams
}: {
    searchParams: Promise<{ query?: string}>
}){
const { query } = await searchParams;
const products: Product[] = await getProducts(query); 
return (
 <ProductDetail products={products} />
)
}
// Also note that we will always be seperating our data fetching from our data mutations logic