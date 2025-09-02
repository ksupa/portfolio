import { archivo } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <section className="p-6 items-end md:items-center lg:items-start md:p-20 flex h-screen bg-cover bg-center bg-[url(../images/banner.webp)]">
            <div>
                <h1 className={`${archivo.className} text-6xl md:text-8xl font-bold`}>KEVIN SUPA</h1>
                <p className='text-2xl sm:text-4xl md:text-5xl'>FRONTEND DEVELOPER</p>
            </div>
        
            {/* <div className="text-right flex items-end justify-end h-96">
                <ol>
                    <li className="mb-10">
                        <Link href='#about' className="text-5xl">About</Link>
                    </li>
                    <li className="mb-10">
                        <Link href='#' className="text-5xl">Projects</Link>
                    </li>
                    <li>
                        <Link href='#' className="text-5xl">Contact</Link>
                    </li>
                </ol>
            </div> */}
        </section>

        {/* About */}
        <div className="mt-7 p-6 md:p-20 w-full max-w-6xl my-0 mx-auto">
            <p className="text-2xl sm:text-4xl md:text-5xl text-center mb-4">Hello! I'm Kevin Supa.</p>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-4">A frontend developer in Edmonton, Alberta with a passion for clean code and smooth user experience.</p>
            <p className="text-lg sm:text-xl md:text-2xl text-center">Multi-instrument musician in my spare time. I believe both great websites and great music come down to the same thing: making something complex feel effortless.</p>
            
            <div className="mt-10 md:mt-20 flex justify-center gap-5 flex-wrap">
                <img 
                    title="HTML" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
                />    
                <img 
                    title="Tailwind CSS" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                />
                <img 
                    title="JavaScript" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                />
                <img 
                    title="Next.js" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
                />
                <img 
                    title="React" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                />
                <img 
                    title="Blazor" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg" 
                />
                <img 
                    title="Flutter" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" 
                />
                <img 
                    title="Material UI" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" 
                />
            </div>
        </div>

        {/* Projects */}
        <section>
            
        </section>
    </main>
  );
}
