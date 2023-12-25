
import { useState, useEffect } from 'react';


export type Size = {
    width: number;
    height: number;
}

export function useWindowSize() {
    const [size, setSize] = useState<Size>({ 
        width: window.innerWidth,
        height: window.innerHeight
    })


    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [ size ]);

    return size
}

