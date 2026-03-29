import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  console.log(props.userData)
  return (
    <div className='flex justify-between gap-10 px-18 py-10 h-[90vh]'>
        <LeftContent />
        <RightContent userData={props.userData}/>
    </div>
  )
}

export default PageContent