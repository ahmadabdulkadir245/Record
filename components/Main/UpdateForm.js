import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function UpdateForm({ location, path }) {
  const router = useRouter();
  const [warning, setWarning] = useState(false);

  const [inputs, setInputs] = useState({
    amount: {
      value: 0,
      isValid: true,
    },
    date: {
      value: "",
      isValid: true,
    },
    purpose: {
      value: "",
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

  const submitHandler = (e) => {
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
      amount: inputs.amount.value,
      date: inputs.date.value,
      purpose: inputs.purpose.value,
    };
    alert("updated Successfully");
    dispatch(location(userExpenseDetails));
    router.push(path);
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
          <div className='col-span-2 lg:col-span-1 md:col-span-4  text-[#093158]'>
            <input
              type='text'
              placeholder='AMOUNT'
              className={`w-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.amount.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              onChange={inputChangeHandler.bind(this, "amount")}
            />
          </div>
          <div className='col-span-2 lg:col-span-1 md:col-span-4  text-[#093158]'>
            <input
              type='date'
              placeholder='MONTH-DAY-YEAR'
              className={`w-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.date.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              onChange={inputChangeHandler.bind(this, "date")}
            />
          </div>
          <div className='col-span-2  md:col-span-4  text-[#093158]'>
            <textarea
              placeholder='PURPOSE'
              className={`w-full border-[2px] border-[#093158] p-3 rounded-md outline-none ${
                !inputs.purpose.isValid && "bg-red-300"
              } transition-all duration-300 ease-linear`}
              onChange={inputChangeHandler.bind(this, "purpose")}
            ></textarea>
          </div>
        </div>
        <button className='flex justify-center mt-8 lg:mt-12 m-auto bg-[#ffcb05] w-[300px] rounded-md text-white  p-3 md:w-[400px] outline-none transition-all duration-300 ease-in-out hover:bg-[#093158] mb-10'>
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default UpdateForm;
