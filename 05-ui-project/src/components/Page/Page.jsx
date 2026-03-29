import Navbar from './Navbar'
import PageContent from './PageContent'

const Page = (props) => {
  return (
    <>
        <Navbar />
        <PageContent userData={props.userData}/>
    </>
  )
}

export default Page