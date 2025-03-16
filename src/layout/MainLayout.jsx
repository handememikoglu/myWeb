import { useEffect, useState } from "react"
import Header from "../components/Header";
import App from "../App";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Contact from "../components/contact";

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
                    {page === "/" && <HomePage navigate={navigate} />}
                    {page === "/Projeler" && <Projects  navigate={navigate}/>}
                    {page === "/iletisim" && <Contact navigate={navigate} />}
                </App>
            </div>
        </div>
    )
}