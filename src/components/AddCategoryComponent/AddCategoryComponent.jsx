import React, { useEffect, useState } from "react";
import "./AddCategoryComponent.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategoryComponent = () => {

  const navigate = useNavigate()

  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const [categories, setCategories] = useState([])
  const [monthUrl, setMonthUrl] = useState() 
  const [dateUrl, setDateUrl] = useState() 

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

  function getCurrentDate() {
    const month = new Date().getMonth();
    const dateNumber = new Date().getDate();

    setMonthUrl(monthsArray[month]);
    setDateUrl(dateNumber);
  }

  useEffect(() => {
    getCurrentDate()
  }, [])
  
  async function getAllCategories() {
    const response = await axios.get(`${baseUrl}/categories`)
    console.log(response.data)
    setCategories(response.data)
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const postNewCategory = async (newCategory) => {
    try {
      await axios.post(`${baseUrl}/categories`, newCategory)
    } catch (error) {
      console.error(error);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    //Get values from form
    const nameValue = event.target.name.value;
    const detailsValue = event.target.details.value
    const colorValue = event.target.dropdown.value;

    // Check that name has info typed in
    if (!nameValue) {
      alert("You need to fill out a name!");
      return;
    }

    // Check that name has info typed in
    if (!event.target.details.value) {
      alert("You need to fill out a description!");
      return;
    }

    const newCategory = {
      name: nameValue,
      details: detailsValue,
      color: colorValue,
    };

    postNewCategory(newCategory)
    alert(`${newCategory.name} successfully added!`)
    navigate(`/${monthUrl}/${dateUrl}`);
  }

  return (
    <>
      <div className="addcategory">
        <form onSubmit={submitHandler} className="addcategory__form" action="">
          <div className="addcategory__box">
            <label htmlFor="name" className="addcategory__labels">
              Name:
            </label>
            <input name="name" id="name" type="text"></input>
          </div>

          <div className="addcategory__box">
            <label htmlFor="details">Details:</label>
            <textarea name="details" id="details"></textarea>
          </div>

          <div className="addcategory__box">
            <label htmlFor="dropdown" className="addcategory__labels">
              Color:
            </label>
            <select id="dropdown" name="colors">
              {categories.map(category => (
                <option key={category.id} value={category.color}>{category.color}</option>
              ))}
            </select>
          </div>

          <button className="addcategory__button" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategoryComponent;
