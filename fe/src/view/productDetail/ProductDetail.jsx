import { Breadcrumb, Row, Slider } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import SyncSlider from "./SyncSlider";
import ProductInfo from "./ProductInfo";
function ProductDetail() {
    return (
        <>
            <Row style={{
                marginBottom: "12px"
            }}>
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '',
                            title: (
                                <>
                                    <UserOutlined />
                                    <span>Application List</span>
                                </>
                            ),
                        },
                        {
                            title: 'Application',
                        },
                    ]}
                />
            </Row>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <SyncSlider />
                <div style={{
                    marginLeft: "18px"
                }}>
                    <ProductInfo />
                </div>
            </div>
        </>

    );
}

export default ProductDetail;
