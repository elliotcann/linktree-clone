import Image from "next/image";
import data from "../data.json";

export default function Home() {
 return (
  <div className="flex max-auto w-full justify-center mt-12">
    <Image 
      className="rounded-full"
      src={data.avatar} 
      alt={data.name} 
      width={100} 
      height={100} 
    />
    <h1 className="font semmibold">
      {data.name}
    </h1>
  </div>
 );
}
