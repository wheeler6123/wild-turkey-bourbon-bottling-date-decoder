'use client';

import { useState } from "react";
import { getDates, DateResultObject } from "../utils";

interface InputFormProps {
    onSubmit: (data: DateResultObject & { code: string }) => void;
}
const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    const [code, setCode] = useState<string>('');

    const handleSubmit = async () => {
        const date = getDates(code);
        if (date) {
            onSubmit({...date, code});
        }
    }

    console.log(code);

    return (
        <div className="w-full md:w-3/4 max-w-[1200px] h-16 md:mx-auto my-4 flex align-center space-between border-solid border-2 rounded-3xl">
            <div className="w-1/3 sm:w-1/2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-l-3xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 flex items-center text-2xl">
              <span className="hidden sm:flex sm:w-5/6 md:w-11/12 lg:w-3/4 xl:w-7/12 text-sm md:text-lg lg:text-xl px-6 py-2 backdrop-blur-xl bg-black rounded-2xl font-bold h-full text-yellow-600">Enter Your Laser Code</span>
            </div>
            <div className="w-2/3 sm:w-1/2 h-full flex space-between bg-white rounded-3xl">
              <label htmlFor="search" hidden>Search</label>
              <input type="text" name='search' onChange={(e) => setCode(e.target.value)} value={code} placeholder="Enter code here..." className="w-full h-full rounded-r-2xl text-gray-700 font-semibold text-sm md:text-xl p-2 border-none placeholder:text-yellow-700"/>
              <button onClick={handleSubmit} className="text-yellow-700 text-sm md:text-xl lg:text-2xl p-2 hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 hover:text-white hover:rounded-r-3xl">Submit</button>
            </div>  
        </div>
    )
};

export default InputForm;