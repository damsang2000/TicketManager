import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import Date from "../date/Date";
const Modal = (props: any) => {
  const [close, setClose] = useState(props.close);
  const refClose = useRef<any>(null);
  const closeModal = () => {
    setClose(false);
    if (!close) {
      refClose.current.setAttribute("id", "close");
    }
  };
  useEffect(() => {
    if (close) {
      refClose.current.setAttribute("id",'');
    }
  }, [close]);
  return (
    <div ref={refClose} className="modal-filter" onClick={closeModal}>
      <div className="modal-content">
        <h3>lọc vé</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
