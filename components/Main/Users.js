import UserContainer from "./UserContainer";
import { useSelector } from "react-redux";
import {
  ahmadAmount,
  generalAmount,
  mariaAmount,
  mommyAmount,
  selectedExpenseTotal,
  zainabAmount,
} from "../../slices/expensesSlice";

import { UserExpenses } from "../../data/userExpense";
function Users() {
  const total = useSelector(selectedExpenseTotal);
  const ahmadTotal = useSelector(ahmadAmount);
  const mariaTotal = useSelector(mariaAmount);
  const mommyTotal = useSelector(mommyAmount);
  const zainabTotal = useSelector(zainabAmount);
  const generalTotal = useSelector(generalAmount);
  return (
    <div className='m-auto mt-24 lg:mt-16 max-w-3xl 2xl:max-w-4xl'>
      <UserContainer user={"AHMAD"} amount={ahmadTotal} path={"/user/ahmad"} />
      <UserContainer user={"MARIA"} amount={mariaTotal} path={"/user/maria"} />
      <UserContainer user={"MOMMY"} amount={mommyTotal} path={"/user/mommy"} />
      <UserContainer
        user={"ZAINAB"}
        amount={zainabTotal}
        path={"/user/zainab"}
      />
      <UserContainer
        user={"GENERAL"}
        amount={generalTotal}
        path={"/user/general"}
      />
      <UserContainer user={"TOTAL"} amount={total} path={"/total"} />
    </div>
  );
}

export default Users;
