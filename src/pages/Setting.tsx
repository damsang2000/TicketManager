import {
  Button,
  Col,
  Radio,
  Row,
  Table,
  Input,
  TimePicker,
  Checkbox,
  Menu,
  Dropdown,
} from "antd";
import React, { useState } from "react";
import { ServicePacks } from "./Interface";
import Search from "./Search";
import { columnService } from "./Column";
import { FilterOutlined, DownOutlined } from "@ant-design/icons";

import Date from "../component/date/Date";
import Buttons from "../component/button/Buttons";
const menu = (
  <Menu>
    <Menu.Item key="0">
      <p>Đang áp dụng</p>
    </Menu.Item>
    <Menu.Item key="1">
      <p>Chưa áp dụng</p>
    </Menu.Item>
  </Menu>
);
const data: ServicePacks[] = [
  {
    key: 1,
    STT: 1,
    CodePack: "ALT20210501",
    NamePack: "Gói gia đình",
    ApplicableDate: "14/04/2021 08:00:00",
    ExpirationDate: "14/04/2021 23:00:00",
    TicketPrice: "90.000 VNĐ",
    ComboPrice: "360.000 VNĐ/4 Vé",
    Status: "Đang áp dụng",
    Update: "Cập nhật",
  },
];
const Setting = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="containerContent">
        <h1 className="title">Danh sách vé</h1>
        <div className="containerSearchAndButton">
          <Search />
          <div>
            <Button danger className="btn-handle">
              Xuất file(.csv)
            </Button>
            <Button
              danger
              className="btn-handle btnInvoke"
              onClick={() => setShowModal(true)}
            >
              Thêm gói vé
            </Button>
          </div>
        </div>
        <Table columns={columnService} dataSource={data} />
      </div>
      {showModal && (
        <div className="modal-filter" onClick={() => setShowModal(false)}>
          <div
            className="modal-content modal-setting"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="title-filter">Thêm gói vé</h1>
            <div className="filter-date">
              <Row>
                <h4>Tên gói vé</h4>
                <span className="end">*</span>
              </Row>
              <Row>
                <Input placeholder="Nhập tên gói vé" className="inputTicket" />
              </Row>
              <Row>
                <Col span={12}>
                  <h4>Ngày áp dụng</h4>
                </Col>
                <Col span={12}>
                  <h4>Ngày hết hạn</h4>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Date />
                  <span style={{ width: "3px" }}> </span>
                  <TimePicker />
                </Col>
                <Col span={12}>
                  <Date />
                  <span> </span>
                  <TimePicker />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Giá vé áp dụng</h4>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Checkbox>Vé lẻ (vnđ/vé) với giá</Checkbox>
                  <Input placeholder="Giá vé" className="inputPrice" />
                  <span> </span>
                  <span>/Vé</span>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Checkbox>Combo vé với giá</Checkbox>
                  <Input placeholder="Giá vé" className="inputPrice" />
                  <span> </span>
                  <Input placeholder="Giá vé" className="inputPrice" />
                  <span> </span>
                  <span>Vé</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Tình trạng</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Dropdown overlay={menu}>
                    <Button style={{ width: "150px" }}>
                      Đang áp dụng <DownOutlined />
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
              <Row>
                <Buttons filter="btn-filter" name="Hủy" custom="custom" />
                <Buttons filter="btn-filter" name="Lưu" custom="customMargin" invoke='btnInvoke'/>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Setting;
