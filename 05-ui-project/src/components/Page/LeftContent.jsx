import Arrow from './Arrow'
import Hero from './Hero'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>  
        {/* For Text in the Left Section of Page */}
        <Hero />

        {/* For Arrow Icon */}
        <Arrow />
    </div>
  )
}

export default LeftContent