import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const calculateAge = (dob) => {
    console.log("dob" + dob);
    const today = new Date();
    const birthDate = new Date(dob);
    console.log("birthDate = " + birthDate);

    let age = today.getFullYear() - birthDate.getFullYear();
    console.log("age = " + age);
    return age;
  };

  //  Design the Data to "23 Feb 2025" format
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1]) - 1] + " " + dateArray[2]
    );
  };

  const currency = '$'

  const value = {
    calculateAge,
    slotDateFormat,
    currency
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider