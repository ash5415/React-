

import { useEffect } from "react";

const useTitle =(record)=>{
   
      useEffect(() => {
        document.title=`Record${record}`
      },[record])

}
export default useTitle;