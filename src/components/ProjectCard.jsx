export default function ProjectCard({project}){
    return(
        <div className="project-card">
            <img src={project.image} alt="" />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}