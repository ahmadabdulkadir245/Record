import Link from "next/link";
import ExpenseContainer from "./ExpenseContainer";
import UserContainer from "./UserContainer";

function SingleUser({ userId, userExpenses }) {
  if (!userExpenses) {
    return <p className='text center iceland text-xl'>No expense Available</p>;
  }
  const total = userExpenses.reduce((total, item) => total + +item.amount, 0);
  return (
    <div>
      <UserContainer user={userId} amount={total} path={"/"} />
      {userExpenses.map(({ id, date, purpose, amount }) => (
        <div key={id}>
          <Link href={`/update/${id}`}>
            <a>
              <ExpenseContainer date={date} purpose={purpose} amount={amount} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SingleUser;
