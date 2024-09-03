import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import MiniNav from "../../common/components/MiniNav";
const LoveCalculator = () => {
    const axios = require('axios');
    const [FirstName, setFirstName] = useState("John Doe")
    const [SecondName, setSecondName] = useState("Elizabeth")
// const options = {
//   method: 'GET',
//   url: 'https://love-calculator.p.rapidapi.com/getPercentage',
//   params: {
//     sname: FirstName,
//     fname: SecondName
//   },
//   headers: {
//     'x-rapidapi-key': 'a4d702d09amsh7b6d61652897a15p157f4fjsne2cf8f30c1d0',
//     'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
//   }
// };

// const APIFunction = async () => {
//     try {
//     	const response = await axios.request(options);
//     	console.log(response.data);
//     } catch (error) {
//     	toast.error("Error: Something went wrong");
//     }

// }
  return (
    <>
    <div className="min-h-[100vh] w-full bg-gray-700"></div>
    </>
  )
}

export default LoveCalculator
