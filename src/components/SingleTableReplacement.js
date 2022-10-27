import React, { useCallback, useState } from 'react';
import handleSingleTable from '../logic/HandleSingleTable';
import Content from './defaultLayout/Content';
import Selected from './defaultLayout/Selected';


const SingleTableReplacement = () => {
    const [types, setTypes] = useState("encode")
    const [strings, setStrings] = useState("")
    const [result, setResult] = useState()

    const handleSetTypes = useCallback((value) => {
        setTypes(value)
    }, [])
    const handleSetStrings = (e) => {
        const value = e.target.value.toLowerCase()
        setStrings(value.replace(/\s+/g, ''))
    }

    return (
        <Content>
            <h3 className="font-medium text-xl">Single table replacement:</h3>
            <div className="flex flex-col gap-4">
                <Selected types={types} handleSetTypes={handleSetTypes}></Selected>


                <div className="flex flex-col gap-4">
                    <textarea
                        className="w-full h-40 border border-gray-400 rounded-md outline-[#FF8787] p-4"
                        onChange={handleSetStrings}>
                    </textarea>
                    <button
                        className="py-1 px-4 w-[100px] rounded-full bg-[#FF8787] font-medium text-white active:bg-[#FF8787]/50"
                        onClick={() => setResult(handleSingleTable(strings, types))}>
                        Swap
                    </button>
                    <textarea
                        className="w-full h-40 border border-gray-400 rounded-md outline-none p-4"
                        readOnly
                        value={result ? result : "......"}>
                    </textarea>
                </div>
            </div>
        </Content>
    );
};

export default SingleTableReplacement;