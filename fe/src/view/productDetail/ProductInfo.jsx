import { Breadcrumb, Col, Row, Slider } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import SyncSlider from "./SyncSlider";
import ButtonHoverBell from "../../global/commonComponent/ButtonHoverBell";
function ProductInfo() {
    return (
        <>
            <Row>
                <Col span={24}>
                    <a href="#" style={{
                        color: "black",
                        cursor: "text",
                        fontSize: "18px",
                        fontWeight: 600,
                        letterSpacing: "1px"
                    }}>Bộ Hub chuyển đổi Mtul Grem 2 Series 24K</a>
                </Col>
                <Col span={24}>
                    <ButtonHoverBell title={"Theo dõi giảm giá"} />
                </Col>
                <Col span={24}>
                    <h4>Giá từ Shoppe</h4>
                </Col>
            </Row>
        </>
    );
}

export default ProductInfo;
