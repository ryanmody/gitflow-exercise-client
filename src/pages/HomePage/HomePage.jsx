import React from 'react'
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent'
import TaskListComponent from '../../components/TaskListComponent/TaskListComponent'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const HomePage = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  // Get the month and day from the URL
  const { month } = useParams();
  const { date } = useParams()
  // const [categories, setCategories] = useState([])

  //Tasks by day
  const [tasksDay, setTasksDay] = useState([])
  //Tasks by month
  const [tasksMonth, setTasksMonth] = useState([])
  const [dates, setDates] = useState([]);

    // Initalize an array of objects that'll be my "key" for determining how many boxes to "skip"
    const dateKey = [
      { day: "Sunday", skip: 0 },
      { day: "Monday", skip: 1 },
      { day: "Tuesday", skip: 2 },
      { day: "Wednesday", skip: 3 },
      { day: "Thursday", skip: 4 },
      { day: "Friday", skip: 5 },
      { day: "Saturday", skip: 6 },
    ];
  
    //Get all months data
    async function getMonths() {
      try {
        const response = await axios.get(`${baseUrl}/months`);
        const monthInfo = response.data;
  
        // Find which month we're on
        const foundMonth = monthInfo.find(
          (object) => object.month.toLowerCase() === month
        );
        if (foundMonth) {
          // Logic for figuring out how many boxes to "skip"
          const skip =
            dateKey.find((object) => object.day === foundMonth.startday).skip ||
            0;
  
          //Logic for getting how many days in the month
          const datesArray = Array.from(
            { length: foundMonth.days },
            (_, i) => i + 1
          );
  
          //Logic for adding empty string to array based on value of skip, then adding the days after in the month.
          const updatedDatesArray = [...Array(skip).fill(""), ...datesArray];
          setDates(updatedDatesArray);
        }
      } catch (error) {
        console.error(error);
      }
    }

  async function getTasksByMonth() {
    const response = await axios.get(`${baseUrl}/${month}/tasks`)

    console.log(tasksMonth)
    setTasksMonth(response.data)
  }

  async function getTasksByDay() {
    const response = await axios.get(`${baseUrl}/${month}/${date}/tasks`)
    setTasksDay(response.data)
  }

  useEffect(() => {
    getMonths();
    // getAllCategories()
    getTasksByMonth()
  }, [month]); // Need this "month" dependency to re-fetch data when "month" changes

  useEffect(() => {
    getTasksByDay()
  }, [date, month]) // Need this date dependency to re-fetch data when "date" or month changes


  return (
    <>
        <CalendarComponent month={month} dates={dates} date={date} tasksMonth={tasksMonth} />
        <TaskListComponent month={month} date={date} tasksDay={tasksDay}/>
    </>
  )
}

export default HomePage