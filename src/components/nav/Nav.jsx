import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav-back">
        <div className="nav-logo">
          <img className="logo" src="./images/Logo.png" alt="" />
        </div>
        <ul className="nav-lists">
          <li className="nav-lists-item start">Start</li>
          <li className="nav-lists-item">Shows</li>
          <li className="nav-lists-item">Movies</li>
          <li className="nav-lists-item">new</li>
          <li className="nav-lists-item">My List</li>
        </ul>
        <div className="nav-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bell"></i>
        </div>
        </div>
       
      </div>
      
    </div>
  );
}
