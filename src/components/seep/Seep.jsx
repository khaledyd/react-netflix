import "./seep.css";

export default function Seep(props) {
  return (
    <div className="seep">
      <div className="seepinfo row">
        <img src={props.img} alt={props}></img>
      </div>
      
    </div>
  );
}
