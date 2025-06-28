
// well slider components uses client side features, but the library itself does not include use client directive, will can have use client to our server route, but that would mean given up our valuable server side capabilities such as database calls, access to secret server side environment variables, e.t.c, to resolve this, you must  encapsulate third party components within your own client components
import { ImageSlider } from "@/components/ImageSlider"
import { serverSideFunction } from "@/utils/server-utils"
export default function SeverRoutePage() {
    const result = serverSideFunction()

 return <>
     <h1>Server route {result}</h1>
      <ImageSlider/>
     </>
}