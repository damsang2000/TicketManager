import { Col,Row } from "antd";
import moment from "moment";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import Date from "../component/date/Date";
import Search from "./Search";
const Dashboard = () => {
  const charOption = {
    series: [
      {
        name: "Vé chưa sử dụng",
        data: [140, 180, 145, 250, 260, 200, 140],
      },
      {
        name: "Vé đã sử dụng",
        data: [150, 156, 189, 250, 240, 220, 150],
      },
    ],
    options: {
      colors:['#ff8a48','#4F75FF'],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Thứ 2",
          "Thứ 3",
          "Thứ 4",
          "Thứ 5",
          "Thứ 6",
          "Thứ 7",
          "CN",
        ],
      },
      legend: {
        show: false
      }
    },
  };
  // const [datas, setdatas] = useState(charOption);
  return (
    <div className="containerContent">
      <h1 className="title">Thống kê</h1>
      <Row className="row_turnover">
          <Col span={12}>
            <p className="titleFilter" style={{fontSize:'20px'}}>Doanh thu</p>
          </Col>
          <Col span={12} style={{textAlign:'right'}}>
            <Date/>
          </Col>
        </Row>
      <Chart
        options={charOption.options}
        series={charOption.series}
        type="area"
        height={350}
        width={1050}
      />
    </div>
  );
};

export default Dashboard;
