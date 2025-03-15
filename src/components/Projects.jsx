import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";

export default function Projects(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            try{
                const res = await fetch("./projects.json");
                if(!res.ok){
                    throw new Error("Bir hata oluştu.");
                }
                const data = await res.json();
                setProjects(data);
                console.log(data);
                
            }catch(err){
                console.log(err);
                
            }
        }
        getProjects();

    },[])
    return(
        <div className="project-container">
            {projects.length > 0 ? (
                projects.map(project => <ProjectCard  key={project.id} project={project}/>)
            ) : (
                <p>Proje bulunamadı</p>
            )}
        </div>
    )
}