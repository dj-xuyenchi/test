import "./goBuy.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
function GoBuy({ type }) {
  return (
    <>
      <div
        className="btn-go-buy"
        style={{
          color: type === 1 ? "white" : "blue",
          backgroundColor: type === 1 ? "#FF7227" : "",
          border: "1px solid " + type === 1 ? "#FF7227" : "blue",
        }}
      >
        <span className="go" style={{}}>
          Đến nơi bán
        </span>
        <div className="btn-go-buy-icon">
          <MdOutlineArrowRightAlt />
        </div>
      </div>
    </>
  );
}

export default GoBuy;
