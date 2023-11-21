import {useForm} from 'react-hook-form';
import Cake from '../assets/img/birthday-cake.png';
import { useBirthdays } from '../context/BirthdayContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

function BirthdayFormPage() {

  const {register, handleSubmit, setValue} = useForm();

  const {createBirthday, getBirthday, updateBirthday} = useBirthdays();

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    async function loadBirthday(){
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
      ...data, date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }

    if (params.id) {
      updateBirthday(params.id, dataValid);
    } else {
      createBirthday(dataValid);
    }
    navigate("/birthdays");
  });

  return (
    <div className='flex justify-center items-center h-screen relative backdrop-blur-0 bg-neutral-900/50'>
      <div className="night-background blur-2xl opacity-10 absolute top-0 -z-10 w-full h-full rounded"></div>
      <div>
        <img src={Cake} className='w-1/4 sm:w-1/5 block mx-auto'/>
        <h1 className='text-center text-4xl my-4 font-bold'>FELICITA.ME</h1>
        <div className='bg-zinc-500/60 px-4 py-4 mx-2 backdrop-blur-0 rounded'>
          <h1 className='text-center my-2 font-bold'>AGREGAR CUMPLEAÑOS:</h1>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder='Nombre del cumpleañero' autoFocus {...register("name", {required: true})} className='w-full bg-zinc-700 px-4 py-2 my-2'/>
            <select id="opciones" name="opciones" {...register("relationship", {required: true})} className='w-full bg-zinc-700 px-4 py-2 my-2 cursor-pointer'>
              <option value="Friend">Amigo/a</option>
              <option value="Couple">Pareja</option>
              <option value="Pet">Mascota</option>
            </select>
            <input type="date" placeholder='Fecha de su cumpleaños' {...register("date", {required: true})} className='w-full bg-zinc-700 px-4 py-2 my-2'/>
            <button type="submit" className='w-full cursor-pointer  bg-pink-700 py-2 my-2'>Añadir cumpleaños</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BirthdayFormPage;