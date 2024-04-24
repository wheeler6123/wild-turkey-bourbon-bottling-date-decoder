'use client';

import { useState, useEffect } from "react";
import InputForm from "./ui/InputForm";
import ResultsDisplay from "./ui/ResultsDisplay";
import { DateResultObject } from "./utils";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

declare global {
  interface Window { 
    _mtm: any; 
  }
}

const Home: React.FC = () => {
  const [data, setData] = useState<DateResultObject & { code: string } | null>(null);

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://matomo-g6ro.onrender.com/js/container_FzsTzUTB.js'; s.parentNode!.insertBefore(g,s);
}, [])

  return (
    <main className="w-100% h-screen bg-center bg-[url('/turkey1.webp')] bg-cover">
      <div className="w-100% h-screen bg-black/60 flex flex-col">
        <Header />
        <div className="p-2 content flex-1 flex flex-col justify-start items-center ">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 rounded text-center">Wild Turkey Bottling Date Decoder</h1>
          <InputForm onSubmit={setData}/>
          {data ? <ResultsDisplay data={data}/> : (
            <div className="w-full md:w-3/4 max-w-[1200px] mt-8 flex flex-col items-center">
            <div className="flex flex-col items-start w-full gap-4 ">
              <div className="text-3xl md:text-5xl text-yellow-600 font-bold text-shadow-full shadow-black">Entered laser code: </div>
              <div className="text-2xl md:text-4xl font-medium text-gray-400 text-shadow-full shadow-black">Enter a valid code!</div>
            </div>
            <div className="h-8 w-11/12 md:w-full border-t-2 border-b-2 border-yellow-700 my-8"></div>
            <div className="w-11/12 md:w-3/4 max-w-[1200px] flex justify-between gap-12">
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Month</div>
                <div className="mt-4 border-2 border-amber-600 h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-2xl md:text-4xl lg:text-6xl text-yellow-600 text-shadow-full shadow-black font-bold">Month</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Day</div>
                <div className="mt-4 border-2 border-amber-600 h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-2xl md:text-4xl lg:text-6xl text-yellow-600 text-shadow-full shadow-black font-bold">Day</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Year</div>
                <div className="mt-4 border-2 border-amber-600 h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-2xl md:text-4xl lg:text-6xl text-yellow-600 text-shadow-full shadow-black font-bold">Year</div>
              </div>
            </div>
        </div>
          ) }
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;