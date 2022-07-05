import  { useEffect, useState } from "react";
import API_KEY from "./Key";

const CONTEXT_KEY = "af665c757d5ec5089";

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response)=>response.json()).then((result)=>{
              setData(result)
          })
      }
      fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch;

