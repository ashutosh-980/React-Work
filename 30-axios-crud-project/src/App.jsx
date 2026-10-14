import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1E] flex justify-center items-center p-5 flex-col">
      {/* <h1 className="text-8xl text-red-500 font-bold text-center">
        CRUD With Axios
      </h1> */}

      <Posts />
    </div>
  );
};

export default App;
