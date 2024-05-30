
import { Link } from "react-router-dom";

function menuH  ()  {
    return(
<div className="menut">
<div className="menuall">
<nav className="navbar navbar-expand-lg navbar-light  menu">
  <a className="navbar-brand" href="#">
  <Link to={"/trangchu"}>
            <img id="logo"
              src="https://movie-detail-drab.vercel.app/assets/images/logo.svg"
              alt=""
            />
          </Link>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
        <Link to={`/trangchu`} id="link"> Trang chủ </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Liên hệ
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          giới thiệu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" >
          nổi bật
        </a>
      </li>
    </ul>
  </div>
</nav>

  </div>
  </div>
  )
  }
  export default menuH
