export default function ProjectCard({project}){
    return(
        <div className="project-card">
            <img src={project.image} alt="" />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div className="project-cart-btn">
                <a href={project.github} className="project-btn" target="blank">GitHub</a>
                <a href={project.live} className="contact-btn" target="blank">Vercel</a>
            </div>
        </div>
    )
}