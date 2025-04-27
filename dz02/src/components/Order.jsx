import React from "react";

const Order = ({ orderId, orderStatus }) => {
  return (
    <li>
      Заказ #{orderId}: {orderStatus}
    </li>
  );
};

export default Order;
