import { useForm } from "react-hook-form";
// import Cake from '../assets/img/birthday-cake.png';
import { useBirthdays } from "../context/BirthdayContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function BirthdayFormPage() {
  const { register, handleSubmit, setValue } = useForm();

  const { createBirthday, getBirthday, updateBirthday } = useBirthdays();

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    async function loadBirthday() {
      if (params.id) {
        const birthday = await getBirthday(params.id);
        setValue("name", birthday.name);
        setValue("relationship", birthday.relationship);
        setValue("date", dayjs(birthday.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadBirthday();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateBirthday(params.id, dataValid);
    } else {
      createBirthday(dataValid);
    }
    navigate("/birthdays");
  });

  return (
    <div className="relative home">
      <div className="absolute w-full h-full flex justify-center items-center overflow-hidden -z-10">
        <div className="gradient -z-10 top-2/4 left-2/4"></div>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-center text-4xl my-4 font-bold">FELICITA.ME</h1>
          <div className="bg-zinc-500/60 px-4 py-4 mx-2 backdrop-blur-0 rounded">
            <h1 className="text-center my-2 font-bold">AGREGAR CUMPLEAÑOS:</h1>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Nombre del cumpleañero"
                autoFocus
                {...register("name", { required: true })}
                className="w-full bg-zinc-700 px-4 py-2 my-2"
              />
              <select
                id="opciones"
                name="opciones"
                {...register("relationship", { required: true })}
                className="w-full bg-zinc-700 px-4 py-2 my-2 cursor-pointer"
              >
                <option value="Amigo/a">Amigo/a</option>
                <option value="Pareja">Pareja</option>
                <option value="Mascota">Mascota</option>
                <option value="Familia">Familia</option>
              </select>
              <input
                type="date"
                placeholder="Fecha de su cumpleaños"
                {...register("date", { required: true })}
                className="w-full bg-zinc-700 px-4 py-2 my-2"
              />
              <button
                type="submit"
                className="w-full cursor-pointer bg-pink-700 py-2 my-2 hover:bg-pink-800"
              >
                Añadir cumpleaños
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthdayFormPage;
