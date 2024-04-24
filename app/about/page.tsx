import Image from "next/image";
import Link from "next/link";

const AboutPage: React.FC = () => {
    return (
        <div className="w-100% h-screen bg-center bg-[url('/turkey1.webp')] bg-cover">
            <div className="w-100% h-screen bg-black/60 flex flex-col">
                <div className="flex justify-center my-4 font-semibold">
                    <Link href='/'>Return</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold">How to Use the Decoder</h1>
                    <div className="w-4/5 md:w-3/5 lg:w-1/2 p-4 my-4 text-center rounded-3xl">
                        <ol className="flex flex-col items-center gap-4 text-shadow-full shadow-black text-lg md:text-xl md:font-medium">
                            <li>Locate the laser code found on your bottle. It can be hard to find, some codes are printed in black on the neck or back label, while other codes are lightly laser etched into the glass, usually towards the bottom of the bottle. See image below for example.</li>
                            <Image src="/turkeyLaserCode.webp" alt="Laser Code" width={300} height={115} className="shadow-md shadow-white"/>
                            <li>Enter the code into the search bar and click submit.</li>
                            <Image src="/searchbar.webp" alt="Search Bar" width={600} height={72} className="shadow-md shadow-white" />
                            <li>The decoder will display the date your bottle was filled at the distllery!</li>
                            <Image src="/result.webp" alt="Results" width={750} height={529} className="shadow-md shadow-white" />
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;