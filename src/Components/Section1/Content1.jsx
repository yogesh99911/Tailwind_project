
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content1 = (props) => {
 
  return (

    <div className='gap-10 flex justify-between py-3 h-[80vh] px-18'>
        <LeftContent/>
        <RightContent users={props.users} />


    </div>
  )
}

export default Content1