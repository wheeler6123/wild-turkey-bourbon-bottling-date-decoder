'use client';

import { useState, useEffect } from "react";
import InputForm from "./ui/InputForm";
import ResultsDisplay from "./ui/ResultsDisplay";
import { DateResultObject } from "./utils";
import Footer from "./ui/Footer";

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
        <div className="p-2 content flex-1 flex flex-col justify-start items-center ">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold my-8 rounded text-center">Wild Turkey Bottling Date Decoder</h1>
          <InputForm onSubmit={setData}/>
          {data && <ResultsDisplay data={data}/> }
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;