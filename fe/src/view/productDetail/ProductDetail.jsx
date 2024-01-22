import { Breadcrumb, Divider, Row, Slider } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import SyncSlider from "./SyncSlider";
import ProductInfo from "./ProductInfo";
import ShoppeLazada from "./ShoppeLazada";
import { fixPrice } from "../../global/extension/fixPrice";
import SameProduct from "./SameProduct";
import Line from "../../global/chart/Line";
import ButtonHoverBell from "../../global/commonComponent/ButtonHoverBell";
import { useProductApi } from "../../apis/productApis";
import { useEffect, useState } from "react";
function ProductDetail({ id = 1 }) {
  const [data, setData] = useState(undefined);
  async function handleGetProduct() {
    const request = await useProductApi.actions.getProductById(id);
    setData(request.data);
  }
  useEffect(() => {
    handleGetProduct();
    return () => {};
  }, []);
  return (
    <>
      <Row
        style={{
          marginBottom: "12px",
        }}
      >
        <Breadcrumb
          items={[
            {
              href: "",
              title: <HomeOutlined />,
            },
            {
              href: "",
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: "Application",
            },
          ]}
        />
      </Row>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SyncSlider data={data && data.productImageSet} />
        <div
          style={{
            marginLeft: "18px",
          }}
        >
          <ProductInfo data={data} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
        }}
      >
        <ShoppeLazada />
        <div style={{}}>
          <span
            style={{
              fontWeight: 550,
            }}
          >
            So sánh giá
          </span>
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <span style={{}}>
            Tìm thấy{" "}
            <span
              style={{
                fontWeight: 550,
              }}
            >
              13
            </span>{" "}
            nơi bán khác nhau, giá từ{" "}
            <span
              style={{
                fontWeight: 550,
              }}
            >
              {fixPrice(450000)} - {fixPrice(650000)}
            </span>
          </span>
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/OwDr2GswbeYne43OtdOL1cqPx_Q7MoXNPbGAAalXumcCojcbb-KcUQqjP4l2EHOPXySoPWqk5YKDcRqT4_22Yv0L0g0NS6owVBz5ZRFCmUEyyC3NcZd4Nndb6vLEkFJ6k29I5fOb=w556-h50-no"
            alt="s"
          />
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <SameProduct />
          <SameProduct />
          <SameProduct />
          <SameProduct />
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/DF4aF5VZEz_NYkI_eJIyYFD6SM21UyBxiEeWVRaYY3Cr-MUZ8AuUgB6kI6L6DBCzmCJf7TIMRQYdHgZ9m4WEA4e41oglDoWQIpwoK0Tj784azJsPky9g3w6tUR7mhsfi4U8o_NSGJw=w765-h50-no"
            alt="s"
          />
        </div>
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <SameProduct />
          <SameProduct />
          <SameProduct />
          <SameProduct />
        </div>
        <Divider />
        <div
          style={{
            marginTop: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4>Lịch sử giá</h4>
            <ButtonHoverBell title={"Theo dõi giảm giá"} />
          </div>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "856px",
                border: "1px solid #CD7740",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              <Line />
            </div>
            <div
              style={{
                marginLeft: "18px",
                border: "1px solid #CD7740",
                borderRadius: "5px",
                padding: "8px",
                display: "inline-flex",
                alignItems: "center",
                width: "320px",
                height: "114px",
              }}
            >
              <ul>
                <li>Tổng thời gian biến động giá</li>
                <li>Số lần thay đổi giá</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
