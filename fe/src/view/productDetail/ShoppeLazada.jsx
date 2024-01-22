import { Menu, Row } from "antd";
import { FaChartLine } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";
const items = [
  {
    label: "So sánh giá",
    key: "1",
    icon: <MdOutlinePriceChange />,
  },
  {
    label: "Lịch sử giá",
    key: "2",
    icon: <FaChartLine />,
  },
  {
    label: "Mô tả sản phẩm",
    key: "3",
    icon: <IoIosInformationCircleOutline />,
  },
  {
    label: "Đánh giá từ người mua",
    key: "4",
    icon: <IoChatbubbles />,
  },
];
function ShoppeLazada() {
  return (
    <>
      <div
        style={{
          marginBottom: "12px",
          marginTop: "24px",
        }}
      >
        <Menu mode="horizontal" items={items} selectedKeys={1} />
      </div>
    </>
  );
}

export default ShoppeLazada;
