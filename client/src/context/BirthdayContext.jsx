import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { createBirthdayRequest, getBirthdaysRequest, deleteBirthdayRequest, getBirthdayRequest, updateBirthdayRequest } from "../api/birthdays";

const BirthdayContext = createContext();

export const useBirthdays = () => {
  const context = useContext(BirthdayContext);

  if (!context) {
    throw new Error("useBirthdays debe ser usado dentro de un BirthdayProvider");
  }
  return context;
}

export function BirthdayProvider({children}){

  const [birthdays, setBirthdays] = useState([]);

  const getBirthdays = async () => {
    const res = await getBirthdaysRequest();
    setBirthdays(res.data);
  };

  const createBirthday = async (birthday) => {
    try {
      const res = await createBirthdayRequest(birthday);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBirthday = async (id) => {
    try {
      const res = await deleteBirthdayRequest(id);
      if(res.status  === 204) setBirthdays(birthdays.filter(birthday => birthday._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  const getBirthday = async (id) => {
    try {
      const res = await getBirthdayRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const updateBirthday = async (id, birthday) => {
    try {
      await updateBirthdayRequest(id, birthday);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <BirthdayContext.Provider value={{birthdays, createBirthday, getBirthdays, deleteBirthday, getBirthday, updateBirthday}}>
      {children}
    </BirthdayContext.Provider>
  );
}

BirthdayProvider.propTypes = {
  children: PropTypes.any
};