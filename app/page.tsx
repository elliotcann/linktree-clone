import Image from "next/image";
import data from "../data.json";

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <a href={href} className="flex items-center p-1 w-full border rounded-md hover:scale-101 transition-all border-gray-300 mb-3">
      <div className="flex text-center w-full">
        {image && (
          <Image 
            className="rounded-sm mr-2"
            src={image} 
            alt={title} 
            width={40} 
            height={40}
          />
        )}
        <h2 className="font-semibold w-full text-center">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
 return (
  <div className="flex items-center flex-col max-auto w-full justify-center mt-16 px-8">
    <Image 
      className="rounded-full"
      src={data.avatar} 
      alt={data.name} 
      width={96} 
      height={96} 
    />
    <h1 className="font-semibold mt-4 mb-8 text-xl">
      {data.name}
    </h1>
    {data.links.map((link) => (
      <LinkCard key={link.href} {...link} />
    ))}
  </div>
 );
}


