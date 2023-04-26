import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseInput/NewExpense";
import "./App.css";

const initial_expenses = [
  {
    id: "e1",
    title: "Practice Coding",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 932.45,
    date: new Date(2022, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 2, 22),
  },
];
function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
