import { useEffect } from 'react';
import { useBirthdays } from '../context/BirthdayContext';
import BirthdayCard from '../components/BirthdayCard';
import { Link } from 'react-router-dom';

function BirthdayPage() {

  const {getBirthdays, birthdays} = useBirthdays();

  useEffect(() => {
    getBirthdays();
  }, []);

  if (birthdays.length === 0) {
    return(
      <div className='relative home'>
        <div className='absolute w-full h-full flex justify-center items-center overflow-hidden -z-10'>
          <div className="gradient -z-10 top-2/4 left-2/4"></div>
        </div>

        <div className='min-h-screen flex justify-center items-center'>
          <h1>NO HAY CUMPLEAÑOS</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='relative home'>
      <div className='absolute w-full h-full flex justify-center items-center overflow-hidden -z-10'>
        <div className="gradient -z-10 top-2/4 left-2/4"></div>
      </div>
      
      <div className='flex flex-wrap justify-center gap-4 mx-4 my-8'>
        {
          birthdays.map(birthday => {
            return(
              <BirthdayCard birthday={birthday} key={birthday._id}/>
            );
          })
        }
      </div>
      
      <Link to="/add-birthday"><div className='bg-green-400 fixed p-4 rounded-lg font-bold text-4xl cursor-pointer right-4 bottom-10'><p>+</p></div></Link>
    </div>
  )
}

export default BirthdayPage;