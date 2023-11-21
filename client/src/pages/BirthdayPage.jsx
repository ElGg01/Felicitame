import { useEffect } from 'react';
import { useBirthdays } from '../context/BirthdayContext';
import BirthdayCard from '../components/BirthdayCard';

function BirthdayPage() {

  const {getBirthdays, birthdays} = useBirthdays();

  useEffect(() => {
    getBirthdays();
  }, []);

  if (birthdays.length === 0) {
    return(
      <div className='flex justify-center items-center h-screen relative backdrop-blur-0 bg-neutral-900/50'>
        <div className="night-background blur-2xl opacity-10 absolute top-0 -z-10 w-full h-full rounded"></div>
        <div>
        <h1 className='font-bold'>NO HAY CUMPLEAÑOS</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-2 min-h-screen relative backdrop-blur-0 bg-neutral-900/50'>
      <div className="night-background blur-2xl opacity-10 absolute top-0 -z-10 w-full h-full rounded"></div>
      <div className='m-4'>
        {
          birthdays.map(birthday => {
            return(
              <BirthdayCard birthday={birthday} key={birthday._id}/>
            );
          })
        }
      </div>
    </div>
  )
}

export default BirthdayPage;