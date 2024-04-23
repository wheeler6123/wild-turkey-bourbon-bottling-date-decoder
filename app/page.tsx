import Image from "next/image";
import { main } from "ts-node/dist/bin";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-100% max-w-[1240px] mx-auto my-8">
      <h1 className="text-7xl font-bold">Wild Turkey Bottling Date Decoder</h1>
      <div className="w-3/4 h-16 mx-auto my-4 flex align-center space-between border-solid border-2 rounded-3xl">
        <div className="w-1/2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-l-3xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 flex items-center text-2xl">
          <span className="px-6 py-2 backdrop-blur-xl bg-black rounded-2xl font-bold w-max-content h-full text-yellow-600">Enter Your Laser Code</span>
        </div>
        <div className="h-full self-end flex space-between">
          <input type="text" />
          <button className="bg-white text-black">Search</button>
        </div>  
      </div>
    </main>
  );
}
