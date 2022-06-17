import "./Navbar.css";
export default function Nav() {
  return (
    <div className="nav">
      <p className="select">
        <span className="num-ord">1.</span> Basic info
      </p>
      <p className="select1">
        <span className="num-ord1">2.</span>Property Detail
      </p>
      <p className="select1">
        <span className="num-ord1">3.</span>General Info
      </p>
      <p className="select1">
        <span className="num-ord1">4.</span>Location info
      </p>
    </div>
  );
}
