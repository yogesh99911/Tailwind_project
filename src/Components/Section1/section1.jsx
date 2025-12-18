
import Navbar from './Navbar'
import Content1 from './Content1'

const Section1 = (props) => {
 
  return (
    <div className=' h-screen w-full bg-white'>
< Navbar />
< Content1 users={props.users}/>
    </div>
  )
}

export default Section1