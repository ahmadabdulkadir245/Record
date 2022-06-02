import Link from "next/link";
import { useSelector } from "react-redux";
import { selectedExpenseTotal } from "../../slices/expensesSlice";
import ExpenseContainer from "./ExpenseContainer";
import UserContainer from "./UserContainer";

function AllExpense({ userId, userExpenses }) {
  if (!userExpenses) {
    return <p className='text center iceland text-xl'>No expense Available</p>;
  }
  const total = useSelector(selectedExpenseTotal);
  return (
    <div>
      <UserContainer user={userId} amount={total} path={"/"} />
      {userExpenses.map(({ id, date, purpose, amount }) => (
        <div key={id}>
          <ExpenseContainer date={date} purpose={purpose} amount={amount} />
        </div>
      ))}
    </div>
  );
}

export default AllExpense;
