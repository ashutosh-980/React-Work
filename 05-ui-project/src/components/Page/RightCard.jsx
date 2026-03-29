import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 rounded-4xl overflow-hidden relative'>
        <img src={props.image} className='h-full w-full object-cover' alt="" />
        <RightCardContent intro={props.intro} tag={props.tag} id={props.id}/>
    </div> 
  )
}

export default RightCard