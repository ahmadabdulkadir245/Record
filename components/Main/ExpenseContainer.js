import React from "react";
import Colors from "../../constants/Colors";

function ExpenseContainer({ amount, date, purpose, name }) {
  const { primaryBlue, primaryYellow } = Colors;

  return (
    <div className='grid grid-cols-2 gap-6 md:gap-8 px-4 lg:px-0'>
      {" "}
      <div
        className={`col-span-2 flex justify-between items-center p-3 border-2 border-[${primaryBlue}] w-full  lg:w-[100%] outline-none rounded-md bg-[${primaryBlue}] my-3`}
      >
        <span>
          <p className='text-white text-xl'>{purpose}</p>
          <p className='text-white text-md'>
            {date}
            {name && <span className=' uppercase text-sm'>~~&gt; {name}</span>}
          </p>
        </span>
        <span>
          <p
            className={`text-white text-xl bg-[${primaryYellow}] p-[10px] rounded-md`}
          >
            N{amount}
          </p>
        </span>
      </div>
    </div>
  );
}

export default ExpenseContainer;
