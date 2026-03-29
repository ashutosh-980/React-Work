import Page from './components/Page/Page'

const App = () => {

  const users = [
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore,maxime in consequatur temporibus eos?",
      tag: "Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora eaque voluptatum temporibus, harum consectetur repellat quia nesciunt soluta mollitia?",
      tag: "Underserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam culpa id hic quos ullam ratione quisquam voluptate, optio corporis itaque voluptatibus, eum quae cumque quia.",
      tag: "Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam culpa id hic quos ullam ratione quisquam voluptate, optio corporis itaque voluptatibus, eum quae cumque quia.",
      tag: "Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam culpa id hic quos ullam ratione quisquam voluptate, optio corporis itaque voluptatibus, eum quae cumque quia.",
      tag: "Satisfied"
    }

  ];



  return (
    <>
      <Page userData = {users}/>
    </>
  )
}

export default App