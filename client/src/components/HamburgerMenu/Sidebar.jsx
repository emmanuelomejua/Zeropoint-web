import './sidebar.css'
const Sidebar = ({show, onClose}) => {
   
    if(!show) {
        return null;
    }
    return (
        <nav onClick={onClose} className='sidebar-container'>
            <div onClick={e => e.stopPropagation()} className='sidebar-content-container'>
                <div className='sidebar-link-container'>
                    <a href="j">Home</a>
                    <a href="j">Service</a>
                    <a href="j">Blog</a>
                    <a href="j">Contact Us</a>
                </div>
                
            </div>
        </nav>  
    );
}
 
export default Sidebar;