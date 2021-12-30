import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { TicketFamily, InvokeTickets, ServicePacks } from "./Interface";
export const columns: ColumnsType<TicketFamily> = [
  {
    title: "STT",
    dataIndex: "STT",
    key: "STT",
  },
  {
    title: "Booking code",
    dataIndex: "BookingCode",
    key: "BookingCode",
  },
  {
    title: "Số vé",
    dataIndex: "NumberTicket",
    key: "NumberTicket",
  },
  {
    title: "Tình trạng sử dụng",
    key: "UseStatus",
    dataIndex: "UseStatus",
    render: (tags: any) => {
      let color: string = "";
      if (tags.toLowerCase() === "đã sử dụng") {
        color = "purple";
      } else if (tags.toLowerCase() === "chưa sử dụng") {
        color = "green";
      } else if (tags.toLowerCase() === "hết hạn") {
        color = "red";
      }
      return (
        <Tag color={color} key={tags} className="tag">
          {tags}
        </Tag>
      );
    },
  },
  {
    title: "Ngày sử dụng",
    dataIndex: "UseDate",
    key: "UseDate",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "DateTicket",
    key: "DateTicket",
  },
  {
    title: "Cổng check - in",
    dataIndex: "GateCheckIn",
    key: "GateCheckIn",
  },
];

export const columnInvokeTicket: ColumnsType<InvokeTickets> = [
  {
    title: "STT",
    dataIndex: "STT",
    key: "STT",
  },
  {
    title: "Số vé",
    dataIndex: "NumberTicket",
    key: "NumberTicket",
  },
  {
    title: "Ngày sử dụng",
    dataIndex: "UseDate",
    key: "UseDate",
  },
  {
    title: "Tên loại vé",
    dataIndex: "NameTicket",
    key: "NameTicket",
  },
  {
    title: "Cổng check - in",
    dataIndex: "GateCheckIn",
    key: "GateCheckIn",
  },
  {
    title: "Trạng thái",
    dataIndex: "Status",
    key: "Status",
    render: (text) => (
      <i style={{ color: "#A5A8B1", fontSize: "13px" }}>{text}</i>
    ),
  },
];
export const columnService: ColumnsType<ServicePacks> = [
  {
    title: "STT",
    dataIndex: "STT",
    key: "STT",
  },
  {
    title: "Mã gói",
    dataIndex: "CodePack",
    key: "CodePack",
  },
  {
    title: "Tên gói vé",
    dataIndex: "NamePack",
    key: "NamePack",
  },
  {
    title: "Ngày áp dụng",
    dataIndex: "ApplicableDate",
    key: "ApplicableDate",
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "ExpirationDate",
    key: "ExpirationDate",
  },
  {
    title: "Giá vé(VNĐ/Vé)",
    dataIndex: "TicketPrice",
    key: "TicketPrice",
  },
  {
    title: "Giá Combo(VNĐ/Combo)",
    dataIndex: "ComboPrice",
    key: "ComboPrice",
  },
  {
    title: "Tình trạng",
    dataIndex: "Status",
    key: "Status",
    render: (tags: any) => {
      let color: string = "";
      if (tags.toLowerCase() === "đang áp dụng") {
        color = "green";
      } else if (tags.toLowerCase() === "tắt") {
        color = "red";
      }
      return (
        <Tag color={color} key={tags} className="tag">
          {tags}
        </Tag>
      );
    },
  },
  {
    title: "",
    dataIndex: "Update",
    key: "Update",
    render: (text) => (
      <div style={{width: "70px" }}>
        <a href="$">
          <i className="bx bxs-edit"></i>
          {text}
        </a>
      </div>
    ),
  },
];
