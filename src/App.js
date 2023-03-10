import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"


function App() {

  const items = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 2000000.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let itemCount = items.length;

  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  }



  return (
    <div>
      <NewExpense 
      itemCount={itemCount}
      onAddExpense={addExpenseHandler}
      />
      <Expenses items={items}/>
    </div>
  );
}

export default App;
