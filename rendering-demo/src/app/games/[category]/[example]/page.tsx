export async function generateStaticParams(){
  return [
    { category: "adventure", game: "gta"},
    { category: "sport", game: "fifa"},
    { category: "action", game: "Battlefield"}
  ]
}

export default async function ExamplePage({
    params
}:
{
    params: Promise<{ example: string }>
}
) {
const { example } = await params
  return (
    <div>{example} Games rendered at  {new Date().toLocaleTimeString()}</div>
  )
}
