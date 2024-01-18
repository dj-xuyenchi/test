import { Row } from "antd";
import { GrMenu } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import "./header.css";
function Header() {
  return (
    <div>
      <Row
        style={{
          backgroundColor: "#232f3e",
          height: "31px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontWeight: 500,
          }}
        >
          <strong>Thông báo</strong>: Từ ngày 01/01/2024 BeeCost.Vn sẽ chuyển
          đổi thương hiệu và địa chỉ website thành MuaThongMinh.Vn
        </span>
      </Row>
      <Row
        style={{
          borderBottom: "1px solid #D1D5DB",
          height: "81px",
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "16px 0px",
          }}
        >
          <div
            style={{
              width: "20%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/pw/ADCreHd5PMvwKUSbjtSRpUfeyDaazAbdXF1H0arvHtS62AyfivDEAN6hRSq-GTJ6wKiyn-9IEr63aaiNtFq6J2fP_I6VtpGAIwqAQu4B2mL64M2h2HHkPY4VhRWoDpag5VXN3Dxtwb277ZDkXPa0mnDxTTGL=w512"
              alt="logo"
              style={{
                height: "3rem",
              }}
            />
          </div>
          <div
            style={{
              width: "60%",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "576px",
                border: "1px solid #D1D5DB",
                borderRadius: "25px",
                padding: "0 25px",
                position: "relative",
              }}
            >
              <input
                type="text"
                placeholder="Dán link hoặc tìm sản phẩm"
                style={{
                  border: "unset",
                  height: "36px",
                  fontSize: "16px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "550px",
                  paddingTop: "2px",
                  outline: "none",
                }}
              />
              <span
                style={{
                  fontSize: "24px",
                  color: "#FF7227",
                  position: "absolute",
                  right: "10px",
                  top: "5px",
                }}
                className="search-icon"
              >
                <GoSearch />
              </span>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                }}
              >
                <GrMenu />
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "16px",
                  marginLeft: "4px",
                  height: "24px",
                  letterSpacing: "1px",
                }}
              >
                Danh mục
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "8px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "16px",
                  marginLeft: "4px",
                  height: "24px",
                  letterSpacing: "1px",
                }}
              >
                Blog
              </span>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Header;
