import "../css/header.css";
import Image from "../img/fg.jpg";
const Header = () => {
  return (
    <div className="header">
      <h1>Franko-bit</h1>
      <nav className="prof">
        <img src={Image} alt="ok img" />
      </nav>
    </div>
  );
};
export default Header;
