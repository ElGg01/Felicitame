import { useBirthdays } from "../context/BirthdayContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function BirthdayCard({ birthday }) {
  const { deleteBirthday } = useBirthdays();

  return (
    <div className="bg-zinc-600/50 w-72 px-10 py-4 mx-2 backdrop-blur-0 rounded relative">
      <div className="absolute left-0 bottom-10 w-full -z-10">
        <img
          src="https://res.cloudinary.com/dgzivrbtk/image/upload/v1700613290/Felicitame/enmobb2pdhh3kyj0yrn6.png"
          className="w-full opacity-10"
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <div>
          <div className="bg-purple-900 rounded-full">
            <img
            src={birthday.relationship === "Amigo/a" ? "https://res.cloudinary.com/dgzivrbtk/image/upload/v1700726232/Felicitame/beh5dfsvircnghsrsppt.png" : birthday.relationship === "Pareja" ? "https://res.cloudinary.com/dgzivrbtk/image/upload/v1700729499/Felicitame/ipvcks7ftl1h82jfb7nh.png" : birthday.relationship === "Mascota" ? "https://res.cloudinary.com/dgzivrbtk/image/upload/v1700729577/Felicitame/jxcfkqvupvzdb7h2gkaq.png" : birthday.relationship === "Familia" ? "https://res.cloudinary.com/dgzivrbtk/image/upload/v1700729826/Felicitame/hsiotw9hogd8pkmmru79.png" : "https://res.cloudinary.com/dgzivrbtk/image/upload/v1700613290/Felicitame/enmobb2pdhh3kyj0yrn6.png"}
            className="w-40 rounded-full"
            />
          </div>
          </div>
        <div className="w-full overflow-hidden whitespace-nowrap">
          <h1 className="text-center font-bold text-4xl">{birthday.name}</h1>
          <h2 className="text-center">{birthday.relationship}</h2>
          <h3 className="text-center font-bold text-2xl">
            {dayjs(birthday.date).utc().format("DD/MM/YYYY")}
          </h3>
          <div className="my-2 text-center flex gap-2">
            <button
              onClick={() => deleteBirthday(birthday._id)}
              className="bg-red-600 p-2 inline-block w-full hover:bg-red-700"
            >
              Borrar
            </button>
            <Link
              to={`/birthdays/${birthday._id}`}
              className="bg-green-600 p-2 inline-block w-full hover:bg-green-700"
            >
              <button>Editar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

BirthdayCard.propTypes = {
  birthday: PropTypes.object,
};

export default BirthdayCard;
