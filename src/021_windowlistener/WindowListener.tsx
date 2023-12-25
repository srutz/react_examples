import { useEffect } from "react"

export function WindowListener() {

    useEffect(() => {
        const handleResize = (e: Event) => {
            const element = document.querySelector("#myheader") as HTMLElement
            element.textContent = `Size ${window.innerWidth} x ${window.innerHeight}`
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return (
        <h2 id="myheader" >
            Size
        </h2>
    )

}