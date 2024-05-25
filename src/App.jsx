import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateDateDifference } from "./utils/counterSlice";
import arrow from "../public/images/icon-arrow.svg";

const App = () => {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const { years, months, days } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const confirmButton = (e) => {
    e.preventDefault();
    const day = dayRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;

    if (!day || isNaN(day) || !month || isNaN(month) || !year || isNaN(year)) {
      if (!day || isNaN(day)) dayRef.current.style.border = "2px solid red";
      if (!month || isNaN(month))
        monthRef.current.style.border = "2px solid red";
      if (!year || isNaN(year)) yearRef.current.style.border = "2px solid red";
      return;
    }

    dispatch(calculateDateDifference({ day, month, year }));
  };

  return (
    <div className="container mx-auto h-screen items-center flex">
      <div className="calcu p-[10%] sm:p-[8%] md:p-[6%] lg:p-[4%] xl:p-[2%] bg-white justify-center mx-auto h-4/6  w-5/6 sm:w-4/6 2xl:w-3/6 rounded-br-[50px] md:rounded-br-[100px] 2xl:rounded-br-[150px] rounded-tr-[25px] rounded-tl-[25px] rounded-bl-[25px]">
        <div className="top h-[20%]">
          <div className="inputs flex h-full gap-[3%]">
            <label className="w-1/4 h-full flex flex-col" htmlFor="day">
              <h1 className="text-xl md:text-lg ">Kun</h1>
              <input
                ref={dayRef}
                className="h-full border rounded-lg text-sm font-bold px-[15%] bg-transparent sm:container lg:text-lg xl:text-xl sm:text-sm sm:text-none"
                type="text"
                id="day"
                required
                placeholder="DD"
              />
            </label>
            <label className="w-1/4 h-full flex flex-col" htmlFor="month">
              <h1 className="text-xl ">Oy</h1>
              <input
                ref={monthRef}
                className="h-full border rounded-lg text-sm font-bold px-[15%] bg-transparent sm:container lg:text-lg xl:text-xl sm:text-sm sm:text-none"
                type="text"
                id="month"
                required
                placeholder="MM"
              />
            </label>
            <label className="w-1/4 h-full flex flex-col" htmlFor="year">
              <h1 className="text-xl ">Yil</h1>
              <input
                ref={yearRef}
                className="h-full border rounded-lg text-sm font-bold px-[15%] bg-transparent sm:container lg:text-lg xl:text-xl sm:text-sm sm:text-none"
                type="text"
                id="year"
                required
                placeholder="YY"
              />
            </label>
          </div>
        </div>

        <div className="middle flex flex-row items-center h-[20%]">
          <hr className="my-8 block w-full" />

          <button
            onClick={confirmButton}
            className="flex items-center justify-center bg-violet-600 h-16 w-20 xl:h-24 xl:w-28 sm:h-16 sm:w-20  rounded-full px-[3%] py-[3%] cursor-pointer"
          >
            <img src={arrow} alt="Arrow" />
          </button>
        </div>

        <div className="bottom flex flex-col gap-[10%] h-1/2">
          <h1 className="text-4xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-4xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">
              {years}
            </span>{" "}
            Yosh
          </h1>
          <h1 className="text-4xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-4xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">
              {months}
            </span>{" "}
            Oy
          </h1>
          <h1 className="text-4xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-4xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">
              {days}
            </span>{" "}
            Kunlar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
