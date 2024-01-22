import GoBuy from "../../global/commonComponent/GoBuy";
import { fixPrice } from "../../global/extension/fixPrice";
import "./style.css";
function SameProduct({ data }) {
  return (
    <>
      <div className="same-product">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "88%",
          }}
        >
          <img
            src="https://cf.shopee.vn/file/ac765f9684bf6eec9ca5673de960d9ae_tn"
            alt="ss"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "12px",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <div
              style={{
                width: "80%",
              }}
            >
              Hub chuyển đa năng Baseus Metal Gleam Series Multifunctional
              Docking Station
            </div>
            <div
              style={{
                width: "20%",
                color: "#dc2626",
                fontSize: "16px",
              }}
            >
              {fixPrice(550000)}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "12%",
          }}
        >
          <GoBuy type={2} />
        </div>
      </div>
    </>
  );
}

export default SameProduct;
