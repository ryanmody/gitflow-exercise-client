import React, { useEffect, useState } from "react";
import "./FooterComponent.scss";
import calendar from "../../assets/icons/Calendar.svg";
import check from "../../assets/icons/check-circle.svg";
import list from "../../assets/icons/List.svg";
import { Link } from "react-router-dom";

const FooterComponent = () => {

  const [monthUrl, setMonthUrl] = useState() 
  const [dateUrl, setDateUrl] = useState() 

  const monthsArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  function getCurrentDate() {
    const month = new Date().getMonth();
    const dateNumber = new Date().getDate();

    setMonthUrl(monthsArray[month]);
    setDateUrl(dateNumber);
  }

  useEffect(() => {
    getCurrentDate()
  }, [])

  return (
    <>
      <div className="footer">
        <Link className="footer__link" to={`/${monthUrl}/${dateUrl}`}>
          <div className="footer__box">
            <img src={calendar} />
          </div>
        </Link>

        <Link className="footer__link" to={'/addcategory'}>
          <div className="footer__box">
            <img src={check} />
          </div>
        </Link>

        <Link className="footer__link footer__link--noborder" to={'/addtask'}>
          <div className="footer__box footer__box--noborder">
            <img src={list} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterComponent;
