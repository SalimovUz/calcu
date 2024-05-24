import React, { useRef, useState } from "react";
import arrow from "../../public/images/icon-arrow.svg";

const Calculator = () => {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");

  const confirmButton = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!dayRef.current.value || isNaN(dayRef.current.value)) {
      dayRef.current.style.border = "2px solid red";
      hasError = true;
    } else {
      dayRef.current.style.border = "";
    }

    if (!monthRef.current.value || isNaN(monthRef.current.value)) {
      monthRef.current.style.border = "2px solid red";
      hasError = true;
    } else {
      monthRef.current.style.border = "";
    }

    if (!yearRef.current.value || isNaN(yearRef.current.value)) {
      yearRef.current.style.border = "2px solid red";
      hasError = true;
    } else {
      yearRef.current.style.border = "";
    }

    if (!hasError) {
      const today = new Date();
      const inputDate = new Date(
        `${yearRef.current.value}-${monthRef.current.value}-${dayRef.current.value}`
      );

      const diffTime = Math.abs(today - inputDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      const calculatedYears = Math.floor(diffDays / 365);
      const calculatedMonths = Math.floor((diffDays % 365) / 30);
      const calculatedDays = (diffDays % 365) % 30;

      setYears(calculatedYears);
      setMonths(calculatedMonths);
      setDays(calculatedDays);
    }
  };

  return (
    <div className="container mx-auto h-screen items-center flex">
      <div className="calcu p-[2%] bg-white justify-center mx-auto h-4/6  w-5/6 sm:w-4/6 2xl:w-3/6 rounded-br-[50px] md:rounded-br-[100px] 2xl:rounded-br-[150px] rounded-tr-[25px] rounded-tl-[25px] rounded-bl-[25px]">
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
          <h1 className="text-2xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-2xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">{years}</span> Yosh
          </h1>
          <h1 className="text-2xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-2xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">{months}</span> Oy
          </h1>
          <h1 className="text-2xl 2xl:text-6xl font-bold sm:text-4xl xl:text-5xl ">
            <span className="text-2xl 2xl:text-7xl font-bold sm:text-4xl xl:text-5xl text-violet-600">{days}</span> Kunlar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
