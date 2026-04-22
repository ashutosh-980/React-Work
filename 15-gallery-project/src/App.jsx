import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h2 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map((item, idx) => {
      return (
        <div key={idx}>
          <a href={item.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img
                src={item.download_url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="w-40 font-bold text-sm text-center">
              {item.author}
            </h4>
          </a>
        </div>
      );
    });
  }

  if (index === 84) {
    printUserData = (
      <h2 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        No More Data (End of Page)
      </h2>
    );
  }

  return (
    <div className="flex flex-col bg-black overflow-auto min-h-screen p-4 text-white">
      {/* First We use this button to get data from API but later we don't have to used this , so I comment it */}
      {/* <button
        className="bg-green-600 px-12 py-6 mb-5 text-2xl rounded active:scale-95"
        onClick={getData}
      >
        Get Data
      </button> */}

      {/* To dispaly users data */}
      <div className="text-2xl h-[80%] flex-1 flex justify-around flex-wrap gap-10 m-4 p-4">
        {printUserData}
      </div>

      {/* Container for Prev and Next button to move Pages (i.e, Pagination) */}
      <div className="flex justify-center items-center gap-10 py-5">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          className="bg-amber-600 w-20 px-2 rounded-2xl text-lg font-bold cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h2 className="text-xl rounded-full ">Page {index}</h2>
        <button
          disabled={userData.length === 0}
          style={{ opacity: index === 84 ? 0.5 : 1 }}
          className="bg-amber-600 w-20 px-2 rounded-2xl text-lg font-bold cursor-pointer active:scale-95"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
