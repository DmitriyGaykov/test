import React from 'react';

let isDelete : boolean = false;

export const load = (setLoader : React.Dispatch<React.SetStateAction<string>>,
                     loading : boolean) => 
{
    let louder = "Loading";
    const startSize = louder.length;
    const countDoths = 3;
    const endSize = startSize + countDoths;

    const interval = setInterval(() => {
        if(louder.length < endSize)
        {
            louder = louder + ".";
            setLoader(louder);
        }
        else
        {
            louder = louder.substring(0, startSize);
            setLoader(louder);
        }
        
        if(!loading || isDelete)
        {
            clearInterval(interval);
            isDelete = true;
        }
    }, 600);
}
