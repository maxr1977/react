import Greeting from "./Greeting";
import OrderStatus from "./OrderStatus";
import ShoppingList from "./ShoppingList";
import TaskNumber from "./TaskNumber";

let items;
items = ["Хлеб", "Масло", "Сыр"];

const orders = [
  { orderId: 123, status: "в пути" },
  { orderId: 124, status: "доставлен" },
  { orderId: 125, status: "обработан" },
];

function App() {
  return (
    <div className="App">
      <TaskNumber number="1" />
      <Greeting name="Max" />
      <TaskNumber number="2" />
      <ShoppingList items={items} />
      <TaskNumber number="3" />
      <OrderStatus ordersList={orders} />
    </div>
  );
}

export default App;
