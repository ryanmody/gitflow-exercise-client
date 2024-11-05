import React, { useEffect, useState } from "react";
import "./AddTaskComponent.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTaskComponent = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

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

  const [categories, setCategories] = useState([]);
  const [monthUrl, setMonthUrl] = useState() 
  const [dateUrl, setDateUrl] = useState() 

  async function getAllCategories() {
    const response = await axios.get(`${baseUrl}/categories`);
    setCategories(response.data);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  function getCurrentDate() {
    const month = new Date().getMonth();
    const dateNumber = new Date().getDate();

    setMonthUrl(monthsArray[month]);
    setDateUrl(dateNumber);
  }

  useEffect(() => {
    getCurrentDate()
  }, [])

  function submitHandler(event) {
    event.preventDefault();

    const nameValue = event.target.name.value;
    const descriptionValue = event.target.description.value;
    const categoryValue = event.target.category.value;
    const monthValue = event.target.month.value;
    const dateValue = event.target.date.value;

    if (
      !nameValue ||
      !descriptionValue ||
      !categoryValue ||
      !monthValue ||
      !dateValue
    ) {
      alert("Fill out all fields!");
      return;
    }

    const newTaskObject = {
      category_id: categoryValue,
      name: nameValue,
      description: descriptionValue,
      month: monthValue,
      date: dateValue,
    };

    const postNewTask = async (newCategory) => {
      try {
        await axios.post(`${baseUrl}/tasks`, newTaskObject);
      } catch (error) {
        console.error(error);
      }
    };

    postNewTask();
    alert(`${newTaskObject.name} added successfully!`);
    navigate(`/${monthUrl}/${dateUrl}`);
  }

  return (
    <>
      <div className="addtask">
        <form onSubmit={submitHandler} className="addtask__form" action="">
          <div className="addtask__box">
            <label htmlFor="name" className="addtask__labels">
              Name:
            </label>
            <input id="name" type="text"></input>
          </div>

          <div className="addtask__box">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description"></textarea>
          </div>

          <div className="addtask__box">
            <label htmlFor="dropdown" className="addtask__labels">
              Category:
            </label>
            <select id="category" name="category">
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="addtask__box">
            <h3 className="addtask__labels">Deadline:</h3>
            <div className="addtask__headline">
              <select className="addtask__monthday" id="month" name="month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select className="addtask__monthday" id="date" name="date">
                {dates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="addtask__button" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTaskComponent;
