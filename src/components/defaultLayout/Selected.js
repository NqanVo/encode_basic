import React, { useRef } from 'react';

const Selected = (props) => {
    const radioEnRef = useRef()
    const radioReRef = useRef()
    const { types, handleSetTypes } = props
    return (
        <div className="flex gap-4">
            <label htmlFor="encode" className={`${types === 'encode' ? 'border-[#F8C4B4]' : 'border-gray-200'} flex items-center gap-2 border-[2px] py-1 px-2 rounded-full cursor-pointer`}>
                <input className="hidden" ref={radioEnRef} id="encode" type="radio" name="types" value="encode" defaultChecked onClick={() => handleSetTypes(radioEnRef.current.value)} />
                <span className={`${types === 'encode' ? 'bg-[#F8C4B4]' : 'bg-gray-200'} w-3 h-3 rounded-full `}></span>
                <span>Encode</span>
            </label>
            <label htmlFor="recode" className={`${types === 'recode' ? 'border-[#F8C4B4]' : 'border-gray-200'} flex items-center gap-2 border-[2px] py-1 px-2 rounded-full cursor-pointer`}>
                <input className="hidden" ref={radioReRef} id="recode" type="radio" name="types" value="recode" onClick={() => handleSetTypes(radioReRef.current.value)} />
                <span className={`${types === 'recode' ? 'bg-[#F8C4B4]' : 'bg-gray-200'} w-3 h-3 rounded-full `}></span>
                <span>Recode</span>
            </label>
        </div>
    );
};

export default React.memo(Selected);