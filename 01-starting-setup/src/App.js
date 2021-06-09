import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "Dress", amount: 2000, date: new Date(2021, 5, 10) },
    { title: "study Table", amount: 7000, date: new Date(2021, 5, 50) },
    { title: "study chair", amount: 7000, date: new Date(2021, 5, 9) },
    { title: "Grocery", amount: 1190, date: new Date(2021, 5, 8) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date.toISOString()}
      ></ExpenseItem>
    </div>
  );
}

export default App;
