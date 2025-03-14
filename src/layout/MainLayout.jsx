import { useEffect, useState } from "react"
import Header from "../components/Header";
import App from "../App";
import HomePage from "../components/HomePage";

export default function MainLayout(){
    const [page,setPage] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setPage(window.location.pathname);

        window.addEventListener('popstate',handlePopState);
        return () => window.removeEventListener('popstate',handlePopState);

    },[])

    const navigate = (path) => {
        console.log("path değişti",path);
        
        window.history.pushState({},"", path);
        setPage(path);
    }

    return(
        <div>
            <Header navigate={navigate}/>
            <div>
                <App>
                    {page === "/Hakkimda" && <HomePage navigate={navigate} />}
                </App>
            </div>
        </div>
    )
}