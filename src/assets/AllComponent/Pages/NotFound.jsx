 
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
       <div className=' '>
        <h1 className='text-center text-9xl text-rose-600'>404</h1>
        <h3 className='text-center text-2xl'>This Page Is Not Found</h3>
        <div className='flex justify-center my-4'>
        <button className=' bg-rose-400 py-4 px-8 rounded-xl'><Link to='/home'>Home</Link></button>
        </div>
       
       </div>
    </div>
  )
}

export default NotFound
