
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>

<div className='bg-amber-500 flex justify-between items-center p-10'>

    <div >
           Logo
    </div>


    <div className='flex gap-15'>

        <Link to="/">Home</Link>


        <Link to="/ghghy">Rendering</Link>
    </div>
   
</div>

</>
  )
}

export default Navbar