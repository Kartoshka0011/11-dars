import './Drop.css';
import { FaAngleDown } from "react-icons/fa6";
function Drop() {
  return (
    <div className="cont">

<div class="dropdown">
  <span className='spn'>Uz<FaAngleDown /></span>
  <div class="dropdown-content">
  <p>En</p>
  <p>Ru</p>
  </div>
</div>

    </div>
  );
}

export default Drop;
