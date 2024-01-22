import { Breadcrumb, Col, Rate, Row, Slider } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import ButtonHoverBell from "../../global/commonComponent/ButtonHoverBell";
import { fixPrice } from "../../global/extension/fixPrice";
import PriceChange from "../../global/commonComponent/PriceChange";
import GoBuy from "../../global/commonComponent/GoBuy";
function ProductInfo({ data = {} }) {
  return (
    <>
      <Row>
        <Col span={24}>
          <a
            href="#"
            style={{
              color: "black",
              cursor: "text",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {data.name}
          </a>
        </Col>
        <Col span={24}>
          <ButtonHoverBell title={"Theo dõi giảm giá"} />
        </Col>
        <Col span={24}>
          <h4
            style={{
              display: "flex",
              flexDirection: "row",
              lineHeight: "30px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Giá từ Shoppe{" "}
            <div
              style={{
                borderRadius: "50%",
                height: "32px",
                width: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "12px",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  height: "32px",
                  width: "32px",
                }}
                src="https://lh3.googleusercontent.com/mvI9jsrKjP7Q7ZqYOXuJTRZF9Q1e4PZJjjmNAyzh6OKtxtSUNPK920MMFsXploU60VPMqHCdJLEMzaEF_ktvIXuII2IEamnw0Cr5Cb97_803ePqQQYOLtHQLrVUe9e2DPZ3MoxTp"
                alt=""
              />
            </div>
          </h4>
        </Col>
        <Col
          span={16}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#dc2626",
                marginBottom: "4px",
                marginTop: "0px",
              }}
            >
              {fixPrice(data.price)}
            </p>
            <p
              style={{
                textDecoration: "line-through",
                fontSize: ".875rem",
                marginTop: "0px",
              }}
            >
              {fixPrice(data.price)}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PriceChange price={data.price} type={"up"} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <GoBuy type={1} />
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Rate allowHalf defaultValue={data.rate} />{" "}
            <span
              style={{
                marginLeft: "4px",
                color: "#F0F0F0",
              }}
            >
              |
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>60 đánh giá</span>{" "}
            <span
              style={{
                marginLeft: "4px",
                color: "#F0F0F0",
              }}
            >
              |
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>{data.sold} lượt bán</span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ProductInfo;
