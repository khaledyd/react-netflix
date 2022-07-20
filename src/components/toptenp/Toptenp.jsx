import "./toptenp.css";

export default function Toptenp(props) {
  return (
    <div className="toptenp">
      <div className="toptenpi">
          <img src={props.img} alt={props.alt}/>
      </div>
    </div>
  );
}
