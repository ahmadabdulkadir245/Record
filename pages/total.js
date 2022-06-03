import { useSelector } from "react-redux";
import AllExpense from "../components/Main/AllExpenses";
import { selectedExpense } from "../slices/expensesSlice";

function Total() {
  const allExpense = useSelector(selectedExpense);
  return (
    <div className='m-auto mt-24 lg:mt-24 max-w-3xl 2xl:max-w-4xl iceland'>
      <AllExpense userId={"Total"} userExpenses={allExpense} />
    </div>
  );
}

export default Total;
