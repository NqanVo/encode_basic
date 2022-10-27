import React from 'react';
const Content = (props) => {
    return (
        <div className="w-full md:w-3/5 xl:w-4/5 flex flex-col gap-4 px-4 xl:px-0">
            {props.children}
        </div>
    );
};

export default Content;