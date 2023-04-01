import './sidebar.css'
import {Link} from 'react-router-dom'
const Sidebar = ({show, onClose}) => {
   
    if(!show) {
        return null;
    }
    return (
        <nav onClick={onClose} className='sidebar-container'>
            <div onClick={e => e.stopPropagation()} className='sidebar-content-container'>
                <div className='sidebar-link-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                
            </div>
        </nav>  
    );
}
 
export default Sidebar;