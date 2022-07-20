import "./trendingp.css";

export default function Trendingp(props) {
  return (
    <div className="trendingp">
      <div className="trendingpi">
          <img src={props.img} alt = {props}></img>
      </div>
    </div>
  );
}