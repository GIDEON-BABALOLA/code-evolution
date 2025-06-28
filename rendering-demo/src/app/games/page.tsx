import Link from "next/link";
export default function GamesPage() {
  return (
<>
<h1>Featured Games</h1>
<Link href={"/products/adventure/gta"}>Game 1</Link>
<Link href={"/products/sport/fifa"}>Game 2</Link>
<Link href={"/products/action/Battlefield"}>Game 3</Link>
<Link href={"/products/adventure"}>Game 1</Link>
<Link href={"/products/sport"}>Game 2</Link>
<Link href={"/products/action"}>Game 3</Link>
</>
  )
}
// We can tell nextJS to prerender at least our featured products pages