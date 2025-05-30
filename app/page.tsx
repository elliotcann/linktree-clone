import Image from "next/image"
import data from "../data.json";

export default function Home() {
  return (

    <div className="relative z-10 flex items-center flex-col overscroll-none">
      <div className="flex items-center flex-col max-auto w-full justify-center my-16 px-8">
        <Image 
          src={data.image} 
          alt="Libby Rollings Logo"
          width={400}
          height={400}
        />
        <div className="flex items-center justify-center my-8 w-full">
          <h1 className="font-semibold text-xl text-white text-center flex items-center gap-2">
            {data.status}
          </h1>
        </div>
        <div
          className="border-r-2 border-b-2 rounded-md pr-1 pb-1 mb-3 transition-all hover:scale-101"
          style={{
            borderRightColor: "#f820b4",
            borderBottomColor: "#f820b4", 
          }}
        >
          <a
            href={data.linktree}
            className="no-underline flex items-center p-1 bg-gray-100 border-r-3 border-b-3 rounded-md"
            style={{  
              borderRightColor: "#02a9e7",
              borderBottomColor: "#02a9e7"
          }}
          >
            <div className="flex text-center w-full">
              <h2 className="flex justify-center items-center font-semibold w-full text-black py-2 px-4">
                {data.linktreeTitle}
              </h2>
            </div>
          </a>
    </div>
      </div>
    </div>

  )

};