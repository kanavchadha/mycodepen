import React, {useState, useEffect} from 'react';

const PREFIX = 'codepen-clone';
export default function useLocalStorage(key, initialValue){
    const prefixKey = PREFIX + key;
    const [value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixKey);
        if(jsonValue){
            return JSON.parse(jsonValue);
        } 
        if(typeof initialValue === 'function'){
            return initialValue()
        }
        else{
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(prefixKey,JSON.stringify(value));
    },[value,prefixKey])

    return [value,setValue];
}