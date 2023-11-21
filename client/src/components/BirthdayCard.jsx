import { useBirthdays } from "../context/BirthdayContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

function BirthdayCard({birthday}) {

  const {deleteBirthday} = useBirthdays();

  return (
    <div className="bg-slate-600 p-4">
      <h1>{birthday.name}</h1>
      <h2>{birthday.relationship}</h2>
      <h3>{dayjs(birthday.date).utc().format("DD/MM/YYYY")}</h3>
      <div className="flex justify-between">
        <button onClick={() => deleteBirthday(birthday._id)} className="bg-red-600 p-2">Borrar</button>
        <Link to={`/birthdays/${birthday._id}`} className="bg-green-600 p-2">Editar</Link>
      </div>
    </div>
  );
}

BirthdayCard.propTypes = {
  birthday: PropTypes.object
}

export default BirthdayCard;