
export async function generateStaticParams() {
   return [{ category: "adventure"}, { category: "sport"}, { category: "action"}];
}
export default async function CategoryPage({
    params
}:
{
    params: Promise<{ category: string }>
}
) {
const { category } = await params
  return (
    <div>{category} Games rendered at {new Date().toLocaleTimeString()}</div>
  )
}
