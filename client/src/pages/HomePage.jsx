import { Link } from 'react-router-dom';
import '../assets/css/Background.css';
import '../assets/css/Home.css';
// import Cake from '../assets/img/birthday-cake.png';

function HomePage() {
  return (
    <div className='relative home'>
      <div className='absolute w-full h-full flex justify-center items-center overflow-hidden -z-10'>
        <div className="gradient -z-10 top-2/4 left-2/4"></div>
      </div>
      <h1 className='text-center text-4xl md:text-8xl py-4 font-bold titulo'>FELICITA.ME</h1>
      <div className='flex justify-center'>
        <h1 className='text-center text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  py-4 font-bold lema'>NUNCA MÁS OLVIDES UN CUMPLEAÑOS</h1>
      </div>
      <div className='w-fit mx-auto'>
        <Link to="/register"><button className='block mx-auto bg-zinc-900/80 p-4 rounded-lg font-bold my-32 text-sm md:text-2xl main-button'>EMPEZAR AHORA</button></Link>
      </div>
      <img src="https://res.cloudinary.com/dgzivrbtk/image/upload/v1700613290/Felicitame/enmobb2pdhh3kyj0yrn6.png" className='w-3/4 md:w-1/4 block mx-auto'/>
    </div>
  )
}

export default HomePage;