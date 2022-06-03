import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  addExpense,
  selectedExpense,
  updateExpense,
} from "../../slices/expensesSlice";
import { storeExpense } from "../../http/http";
function Form({ userId }) {
  const router = useRouter();
  const [warning, setWarning] = useState(false);
  const allExpenses = useSelector(selectedExpense);
  const updateExpenseData = allExpenses.find((expense) => expense.id == userId);
  const [update, setUpdate] = useState(
    updateExpenseData ? updateExpenseData : ""
  );

  const [inputs, setInputs] = useState({
    amount: {
      value: updateExpenseData?.amount ? updateExpenseData.amount : "",
      isValid: true,
    },
    date: {
      value: updateExpenseData?.date ? updateExpenseData.date : "",
      isValid: true,
    },
    purpose: {
      value: updateExpenseData?.purpose ? updateExpenseData.purpose : "",
      isValid: true,
    },
  });
  const inputChangeHandler = (inputIdentifier, e) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: e.target.value, isValid: true },
      };
    });
  };
  const purposeIsValid = inputs.purpose.value.trim().length > 0;
  const amountIsValid = !isNaN(inputs.amount.value) && inputs.amount.value > 0;
  const dateIsValid = inputs.date.value.trim().length > 0;

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!amountIsValid || !dateIsValid || !purposeIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value: inputs.amount.value, isValid: amountIsValid },
          date: { value: inputs.date.value, isValid: dateIsValid },
          purpose: { value: inputs.purpose.value, isValid: purposeIsValid },
        };
      });
      return setWarning(true);
    }
    const userExpenseDetails = {
      id: Date.now(),
      userExpenseID: userId,
      amount: inputs.amount.value,
      date: inputs.date.value,
      purpose: inputs.purpose.value,
    };
    const updatedUserExpenseData = {
      id: userId,
      userExpenseID: updateExpenseData ? updateExpenseData?.userExpenseID : "",
      amount: inputs.amount.value,
      date: inputs.date.value,
      purpose: inputs.purpose.value,
    };

    if (!updateExpenseData) {
      alert("Added Successfully");
      router.replace(`/user/${userId}`);
      // const id = await storeExpense(userExpenseDetails);
      // storeExpense(userExpenseDetails);
      // dispatch(addExpense({ ...userExpenseDetails, id: id }));
      dispatch(
        addExpense({
          ...userExpenseDetails,
          id: (Date.now() * Math.random()).toString(),
        })
      );
    } else {
      alert("Updated successfully");
      dispatch(updateExpense({ id: userId, update: updatedUserExpenseData }));
      router.replace(`/user/${update.userExpenseID}`);
    }
  };
  const cancelHandler = () => {
    router.replace(
      `/user/${updateExpenseData ? updateExpenseData?.userExpenseID : userId}`
    );
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {warning && (
          <p className='text-center text-xl text-red-500 transition-all duration-200 ease-in-out'>
            Invalid Data Was Entered
          </p>
        )}
        <div className='grid grid-cols-2 gap-6 md:gap-8 px-4 lg:px-0'>
          <div className='col-span-2 lg:col-span-1  text-[#093158]'>
            <input
              type='text'
              placeholder='AMOUNT'
              className={`w-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.amount.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              value={inputs.amount.value}
              onChange={inputChangeHandler.bind(this, "amount")}
            />
          </div>
          <div className='col-span-2 lg:col-span-1  text-[#093158]'>
            <input
              type='date'
              placeholder='MONTH-DAY-YEAR'
              className={`w-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.date.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              onChange={inputChangeHandler.bind(this, "date")}
              value={inputs.date.value}
            />
          </div>
          <div className='col-span-2   text-[#093158] h-[200px]'>
            <textarea
              placeholder='PURPOSE'
              className={`w-full h-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.purpose.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              onChange={inputChangeHandler.bind(this, "purpose")}
              value={inputs.purpose.value}
            ></textarea>
          </div>
        </div>
        <div className='flex justify-around items-center '>
          <div
            className='flex justify-center mt-6 lg:mt-8 m-auto bg-[#ffcb05] w-[170px] rounded-md text-white  p-3 md:w-[350px] outline-none transition-all duration-300 ease-in-out hover:bg-[#093158] mb-10 '
            onClick={cancelHandler}
          >
            CANCEL
          </div>
          <button className='flex justify-center mt-6 lg:mt-8 m-auto bg-[#ffcb05] w-[170px] rounded-md text-white  p-3 md:w-[350px] outline-none transition-all duration-300 ease-in-out hover:bg-[#093158] mb-10'>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
