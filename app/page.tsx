import Image from "next/image";
import data from "../data.json";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <div
      className="w-full border-r-2 border-b-2 rounded-md pr-1 pb-1 mb-3 transition-all hover:scale-101"
      style={{
        borderRightColor: "#f820b4",
        borderBottomColor: "#f820b4", 
      }}
    >
      <a
        href={href}
        className="flex items-center p-1 bg-gray-100 border-r-3 border-b-3 rounded-md w-full"
        style={{  
          borderRightColor: "#02a9e7",
          borderBottomColor: "#02a9e7"
       }}
      >
        <div className="flex text-center w-full">
          <div className="w-10 h-10">
            {image && (
              <Image
                className="rounded-sm mr-2"
                src={image}
                alt={title}
                width={40}
                height={40}
              />
            )}
          </div>
          <h2 className="flex justify-center items-center font-semibold w-full text-black -ml-10">
            {title}
          </h2>
        </div>
      </a>
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
    <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
    </svg>

  );
}

function InstagramIcon() {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
        </path>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
        <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z">
        </path>
    </svg>



  );
}

function TikTokIcon() {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
        <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"></path> 
    </svg>
  );
}

function Star({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="pointer-events-none fixed z-0"
      style={{
        ...style,
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "white",
        boxShadow: "0 0 8px 2px #fff, 0 0 16px 4px #f820b4",
        opacity: 0.8,
        animation: "twinkle 2s infinite alternate",
      }}
    />
  );
}

export default function Home() {
 return (
  <>
    <Star style={{ top: "10%", left: "20%" }} />
    <Star style={{ top: "20%", left: "70%" }} />
    <Star style={{ top: "5%", left: "80%" }} />
    <Star style={{ top: "80%", left: "80%" }} />
    <Star style={{ top: "30%", left: "5%" }} />
    <Star style={{ top: "35%", left: "85%" }} />
    <Star style={{ top: "90%", left: "15%" }} />
    <Star style={{ top: "95%", left: "55%" }} />
    <div className="relative z-10 flex items-center flex-col">
      <div className="flex items-center flex-col max-auto w-full justify-center mt-16 px-8">
        <Image 
          className="rounded-full"
          src={data.avatar} 
          alt={data.name} 
          width={120} 
          height={120} 
        />
        <div className="flex items-center justify-center mt-4 mb-2 w-full">
          <h1 className={`font-semibold text-3xl text-white text-center ${lobster.className} flex items-center gap-2`}>
            {data.name}
            <VerifiedIcon />
          </h1>
        </div>
        <h2 className="text-gray-300 mb-8 text-sm text-white">
          {data.bio}
        </h2>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div className="flex items-center gap-2 mt-5 text-white">
        {data.socials.map((link) => {
          if (link.href.includes('instagram')) {
            return (      
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            );
          }
          if (link.href.includes('tiktok')) {
            return (     
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon />
              </a>
            )
          }
          if (link.href.includes('youtube')) {
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
            );
          }
        })}
        </div>
      </div>
    </div>
  </>
 );
}