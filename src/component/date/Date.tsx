import React from "react";

import { DatePicker } from "antd";

import moment from "moment";

const dateFormat = "DD/MM/YYYY";

const Date = () => {
  return (
    <>
      <DatePicker
        defaultValue={moment("2015/01/01", dateFormat)}
        format={dateFormat}
      />
    </>
  );
};

export default Date;
