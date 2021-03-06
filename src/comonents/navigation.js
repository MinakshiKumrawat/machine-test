import { Link } from "react-router-dom";

const Navigation = () => {
               
        return<>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container">
             <Link className="navbar-brand" to="/home">LOGO</Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon   "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/task">Task</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">User</Link>
                  </li>
                </ul>
              </div>
           </div>    
          </nav>
        </>
}
export default Navigation;