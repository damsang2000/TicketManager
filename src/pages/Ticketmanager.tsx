import React, { useRef } from "react";
import { Table, Button, Row, Col, Radio, Checkbox } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { columns } from "./Column";
import { db } from "../firebase/firebase";
import Search from "./Search";
import Date from "../component/date/Date";
import Buttons from "../component/button/Buttons";

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  "Tất cả",
  "Cổng 1",
  "Cổng 2",
  "Cổng 3",
  "Cổng 4",
  "Cổng 5",
];
const defaultCheckedList = [
  "Tất cả",
  "Cổng 1",
  "Cổng 2",
  "Cổng 3",
  "Cổng 4",
  "Cổng 5",
];
const Ticketmanager = () => {
  const [tickets, setTickets] = useState<any>([]);
  const ticketCollection = collection(db, "ticketFamily");

  const [valueUse, setValueUse] = useState(1);

  const [checkedList, setCheckedList] = useState<any>(defaultCheckedList);


  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketCollection);
      const listTicket = data.docs.map((doc) => doc.data());
      setTickets(listTicket);
    };
    getTickets();
  }, [ticketCollection]);

  return (
    <>
      <div className="containerContent">
        <h1 className="title">Danh sách vé</h1>
        <div className="containerSearchAndButton">
          <Search />
          <div>
            <Button
              icon={<FilterOutlined />}
              danger
              className="btn-handle"
              onClick={() => setShowModal(true)}
            >
              Lọc vé
            </Button>
            <Button danger className="btn-handle">
              Xuất file (.csv)
            </Button>
          </div>
        </div>
        <Table columns={columns} dataSource={tickets} />
      </div>
      {showModal && (
        <div
          className="modal-filter"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1 className="title-filter">Lọc vé</h1>
            <div className="filter-date">
              <Row>
                <Col span={12}>Từ ngày</Col>
                <Col span={12}>Đến ngày</Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Date />
                </Col>
                <Col span={12}>
                  <Date />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Tình trạng sử dụng</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Radio.Group
                    onChange={(e) => setValueUse(e.target.value)}
                    value={valueUse}
                  >
                    <Radio value={1}>Tất cả</Radio>
                    <Radio value={2}>Đã sử dụng</Radio>
                    <Radio value={3}>Chưa sử dụng</Radio>
                    <Radio value={4}>Hết hạn</Radio>
                  </Radio.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Cổng Check - in</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={(list)=>setCheckedList(list)} />
                </Col>
              </Row>
              <Row>
                <Buttons filter='btn-filter' name='Lọc' custom='custom'/>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ticketmanager;
