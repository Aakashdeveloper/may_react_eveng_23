import React,{useState,useEffect} from 'react';

function useTitle(){
    const [record] = useState(0);

    useEffect(() => {
        document.title = `Record ${record}`
    },[record])
}

export default useTitle;