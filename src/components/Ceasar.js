import React, { useCallback, useState } from 'react';
import HandleCeasar from "../logic/HandleCeasar"
import Content from './defaultLayout/Content';
import Selected from './defaultLayout/Selected';

const Ceasar = () => {

    const [types, setTypes] = useState("encode")
    const [strings, setStrings] = useState("")
    const [result, setResult] = useState()
    const [k, setK] = useState(1)

    const handleSetTypes = useCallback((value) => {
        setTypes(value)
    }, [])

    const handleSetStrings = (e) => {
        const value = e.target.value.toLowerCase()
        setStrings(value.replace(/\s+/g, ''))
    }
    const handleSetK = (e) => {
        setK(parseInt(e.target.value))
    }

    return (
        <Content>
            <h3 className="font-medium text-xl">Ceasar:</h3>
            <div className="flex flex-col gap-4">
                <Selected types={types} handleSetTypes={handleSetTypes}></Selected>
                <div className="flex gap-2 py-1 px-4 border-[2px] max-w-[200px] rounded-full">
                    <span>K =</span>
                    <input
                        className='flex-1 w-full outline-none'
                        type="number"
                        value={k}
                        onChange={handleSetK}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <textarea
                        className="w-full h-40 border border-gray-400 rounded-md outline-[#FF8787] p-4"
                        onChange={handleSetStrings}>
                    </textarea>
                    <button
                        className="py-1 px-4 w-[100px] rounded-full bg-[#FF8787] font-medium text-white active:bg-[#FF8787]/50"
                        onClick={() => setResult(HandleCeasar(types, strings, k))}>
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

export default Ceasar;