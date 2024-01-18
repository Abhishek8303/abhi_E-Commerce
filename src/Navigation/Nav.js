import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import "./Nav.css";

function Nav() {
  return ( 
  <nav>
    
   
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
      <a herf="#">
      <FiHeart className="nav-icons"/>
      </a>

      <a herf="#" >
      <AiOutlineShoppingCart className="nav-icons" />

      </a>

      <a herf="#" >
      <AiOutlineUserAdd className="nav-icons" />

      </a>


      </div>

    </nav>
    
    )
}

export default Nav;
