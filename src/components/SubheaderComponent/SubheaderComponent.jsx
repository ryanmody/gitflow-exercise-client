import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SubheaderComponent.scss";
import chevron from "../../assets/icons/chevron.svg";

const SubheaderComponent = ({ month }) => {

const [nextMonth, setNextMonth] = useState("")
const [previousMonth, setPreviousMonth] = useState("")

const monthsArray = ["january", "february", "march", "april", "may", 
"june", "july", "august", "september", "october", 
"november", "december"]

function findCurrentMonth() {

  const foundMonth = monthsArray.indexOf(month)
  setNextMonth(monthsArray[foundMonth + 1])
  setPreviousMonth(monthsArray[foundMonth - 1])
}

useEffect(() => {
  findCurrentMonth()
}, [month])

  return (
    <>
      <div className="month-year">
        <Link to={`/${previousMonth}/1`}>
        <img className="month-year__chevron--yflip" src={chevron} alt="chevron" />
        </Link>

        <div className="month-year__title">{month} 2024</div>

        <Link to={`/${nextMonth}/1`}>
        <img src={chevron} alt="chevron" />
        </Link>

      </div>
    </>
  );
};

export default SubheaderComponent;
