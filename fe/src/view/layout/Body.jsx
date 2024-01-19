import "./header.css";
import ProductDetail from "../productDetail/ProductDetail";
function Body() {
    return (
        <div style={{
            width: '100%',
            marginTop: "12px"
        }}>
            <div
                style={{
                    width: '1200px',
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                <ProductDetail />
            </div>
        </div>
    );
}

export default Body;
