import React from 'react';
import {useState, useEffect} from 'react';

const Stopwatch = ({initial,end}) => {
    const [timer,setTimer] = useState(initial)
    useEffect(() => {
        const  id = setInterval(() => {
            setTimer((prev) => {
                if(prev >= end){
                    clearInterval(id)
                    return end
                }
                return prev + 1
            })
        }, 1000);
        return () => {
            clearInterval(id)
        }
    },[])
    return (
        <div>
          Timer : {timer}
        </div>
    );
};

export default Stopwatch;