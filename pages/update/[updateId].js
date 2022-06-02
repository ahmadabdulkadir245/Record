import { useRouter } from "next/router";
import Form from "../../components/Main/Form";
function UpdateExpense() {
  const router = useRouter();
  const updateId = router.query.updateId;

  return (
    <div className='m-auto mt-24 max-w-3xl 2xl:max-w-4xl iceland'>
      <h1 className='text-center text-4xl text-[#093158]'>
        UPDATE <span className='text-[#ffcb05]'>EXPENSE</span>
        <div className='h-[2px] w-[200px] bg-[#ffcb05]  m-auto mb-8'></div>
      </h1>
      <Form userId={updateId} />
    </div>
  );
}

export default UpdateExpense;
