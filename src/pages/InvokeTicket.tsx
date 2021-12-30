import React from "react";
import Search from "./Search";
import { Table, Radio, Space, Col, Row } from "antd";

import { columnInvokeTicket } from "./Column";
import { InvokeTickets } from "./Interface";
import { useState } from "react";

import Date from "../component/date/Date";
import Buttons from "../component/button/Buttons";
const data: InvokeTickets[] = [
  {
    key: 1,
    STT: 1,
    NumberTicket: 12345565,
    UseDate: "15/12/2021",
    NameTicket: "Vé cổng",
    GateCheckIn: "Cổng 1",
    Status: "Chưa đối soát",
  },
];
const InvokeTicket = () => {
  const [Value, setValue] = useState(1);
  return (
    <div className="dfflex">
      <div className="containerContentLeft">
        <h1 className="title">Đối soát vé</h1>
        <div className="containerSearchAndButton">
          <Search />
          <Buttons
            invoke="btnInvoke"
            name="Chốt đối soát"
          />
        </div>
        <Table columns={columnInvokeTicket} dataSource={data}></Table>
      </div>
      <div className="containerContentRight">
        <h1 className="title2">Lọc vé</h1>
        <Row>
          <Col span={12}>
            <p className="titleFilter">Tình trạng đối soát</p>
          </Col>
          <Col span={12}>
            <Radio.Group
              onChange={(e) => setValue(e.target.value)}
              value={Value}
            >
              <Space direction="vertical">
                <Radio value={1}>Tất cả</Radio>
                <Radio value={2}>Đã đối soát</Radio>
                <Radio value={3}>Chưa đối soát</Radio>
              </Space>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <p className="titleFilter">Loại vé</p>
          </Col>
          <Col span={12}>
            <p>Vé cổng</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <p className="titleFilter">Từ ngày</p>
          </Col>
          <Col span={12}>
            <Date />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <p className="titleFilter">Đến ngày</p>
          </Col>
          <Col span={12}>
            <Date />
          </Col>
        </Row>
        <Buttons filter="btn-filter" name="Lọc" />
      </div>
    </div>
  );
};

export default InvokeTicket;
