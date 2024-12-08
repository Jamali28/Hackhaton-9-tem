import Image from "next/image";
import Head from "./Component/Head";
import HeroSec from "./Component/HeroSec";
import Experience from "./Component/Experience";


export default function Home() {
  return (
   <div className="bg-black">
     
     <Head />
       <Experience />
       <HeroSec />      
          
   </div>
  );
}
