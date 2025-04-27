import React from "react";
import Order from "./Order";

const OrderStatus = ({ ordersList }) => {
  return (
    <div>
      <h2>Статус заказов</h2>
      <ul>
        {ordersList.map((order) => (
          <Order
            key={order.orderId}
            orderId={order.orderId}
            orderStatus={order.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
