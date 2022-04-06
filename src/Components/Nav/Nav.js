import './Nav.css';
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
                <p>Resume</p>
                <NavLink to='/contact'>Let's Connect!</NavLink>
            </div>
        </div>
    )
}

export default Nav