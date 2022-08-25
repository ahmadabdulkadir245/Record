import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleUser from "../../components/Main/SingleUser";
import UserNavigation from "../../components/Main/UserNavigation";
import { db } from "../../firebase";
import { fetchExpenses } from "../../http/http";
import { selectedExpense } from "../../slices/expensesSlice";

function User() {
  const [fetchExpense, setFetchExpense] = useState([]);
  const [expense, setExpense] = useState([]);

  const router = useRouter();
  let userId = router.query.userId;
  const allExpense = useSelector(selectedExpense);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setExpense(snapshot.docs);
        }
      ),
    [db]
  );

  const validExpense = allExpense.filter(
    (userExpense) => userExpense.userExpenseID === userId
  );
  return (
    <>
      <UserNavigation userId={userId} />
      <div className='m-auto mt-24 lg:mt-24 max-w-3xl 2xl:max-w-4xl iceland'>
        <SingleUser userId={userId} userExpenses={validExpense} />
      </div>
    </>
  );
}

export default User;
User.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
