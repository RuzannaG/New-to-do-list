import { useRef,memo } from "react";

  

 export default memo( function Memofunc() {
const countRef=useRef(0);
countRef.current++
    return(
        <>
        <p>Call count is {countRef.current}</p>
       </>
    )
    })

  
