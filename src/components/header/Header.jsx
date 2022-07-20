import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="show">
        <img
          className="show-logo"
          src="./images/Netflix_Symbol_RGB 1.png"
          alt=""
        />
        <p className="show-text">SHOW</p>
      </div>
      <div className="info">
        <img src="./images/MAID.PNG" alt=""></img>
      </div>
      <div className="show-icons">
        <button className="show-icon1">
          <i class="fa-solid fa-play"></i>Play
        </button>
        <button className="show-icon2">
          <i class="fa-solid fa-circle-info"></i>More info
        </button>
      </div>
    </div>
  );
}
