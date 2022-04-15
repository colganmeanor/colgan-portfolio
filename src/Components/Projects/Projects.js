import { Project } from "../Project/Project"
import { projectData } from "../../Data/project_data"

const Projects = () => {

    const projects = projectData.map((proj) => {
        return <Project project={proj}/>
    })

    return (
        <div>
            {projects}
        </div>
    )
}

export default Projects