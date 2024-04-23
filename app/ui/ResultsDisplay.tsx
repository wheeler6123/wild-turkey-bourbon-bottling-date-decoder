import React from "react";
import { DateResultObject } from "../utils"

interface ResultsDisplayProps {
    data: DateResultObject & { code: string } | null;
}


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ data }) => {
    if (!data) return null;

    return (
        <div className="w-full md:w-3/4 max-w-[1200px] mt-8 flex flex-col items-center">
            <div className="flex flex-col items-start w-full gap-4 ">
              <div className="text-3xl md:text-5xl text-yellow-600 font-bold text-shadow-full shadow-black">Entered laser code: </div>
              <div className="text-2xl md:text-4xl font-medium text-gray-400 text-shadow-full shadow-black">{data.code}</div>
            </div>
            <div className="h-8 w-11/12 md:w-full border-t-2 border-b-2 border-yellow-700 my-8"></div>
            <div className="w-11/12 md:w-3/4 max-w-[1200px] flex justify-between gap-12">
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Month</div>
                <div className="mt-4 border-2 border-white h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-yellow-600 text-shadow-full shadow-black font-bold">{data.month}</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Day</div>
                <div className="mt-4 border-2 border-white h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-yellow-600 text-shadow-full shadow-black font-bold">{data.day}</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-2xl md:text-5xl text-center text-yellow-600 font-bold text-shadow-full shadow-black">Year</div>
                <div className="mt-4 border-2 border-white h-32 md:h-48 md:px-4 text-center flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-yellow-600 text-shadow-full shadow-black font-bold">{data.year}</div>
              </div>
            </div>
        </div>
    )
}

export default ResultsDisplay;