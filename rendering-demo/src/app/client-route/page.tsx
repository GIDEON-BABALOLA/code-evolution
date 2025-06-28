"use client"
// import { serverSideFunction } from "@/utils/server-utils"
// export default function ClientRoutePage(){
//     const result = serverSideFunction();
//     return <h1>Client Route, {result}</h1>
// }
// delay is not denial, a delay might be a blessing, a disappointment might be a miracle
import { useTheme } from '@/components/theme-provider';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return (
    <h1 style={{color: theme.colors.secondary}}>Client router page</h1>
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //   </Slider>
    // </div>
  );
}
