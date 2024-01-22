import { fixPrice } from "../extension/fixPrice";
import "./priceChange.css";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
function PriceChange({ type, price }) {
  return (
    <>
      <div className="btn-price-change">
        <div className="btn-price-change-icon">
          {type === "up" ? (
            <HiMiniArrowTrendingUp />
          ) : (
            <HiMiniArrowTrendingDown />
          )}
        </div>
        <span className="price">{fixPrice(price)}</span>
      </div>
    </>
  );
}

export default PriceChange;
