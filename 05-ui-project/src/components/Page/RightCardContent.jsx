
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
      <h2 className="border-none w-6 h-6 flex justify-center items-center bg-white rounded-full font-bold text-2xl">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg pb-6 leading-normal text-white font-bold">
          {props.intro}
        </p>
        <div className="flex justify-between mt-2">
          <button className="bg-blue-600 px-6 py-1 rounded-full text-center font-bold text-white cursor-pointer">
            {props.tag}
          </button>
          <button>
            <i className="ri-arrow-right-line bg-blue-600 px-2 py-2 rounded-full text-center font-bold text-white cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
