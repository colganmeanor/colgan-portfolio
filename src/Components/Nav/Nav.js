import './Nav.css';
import resume from '../../Assets/colgan_resume.pdf'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-bar'>
            <div className='title-message'>
               <p>Hi - I'm Colgan. :)</p>
            </div>
            <div className='nav-links'>
                <NavLink to='/'>About Me</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <a href={resume} target='_blank'>Resume</a>
                <NavLink to='/contact'>Let's Connect!</NavLink>
            </div>
        </div>
    )
}

export default Nav