import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 sticky-top">
    <div className="container">
        <NavLink className="navbar-brand  fs-4 px-2 font-italic" to="/"> Naveen Vasamsetti</NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="expand" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/education">Education</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li> */}
            </ul>
            
        </div>
    </div>
</nav>
  );
}

export default Navbar;