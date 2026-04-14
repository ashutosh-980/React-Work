import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    // console.log(copyTask);

    setTask(copyTask);
    // console.log(task);

    // console.log(title);
    setTitle("");

    // console.log(details);
    setDetails("");
  };

  const handleDelete = (idx) => {
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen p-6 bg-black text-white overflow-auto no-scrollbar">
      <h2 className="text-6xl font-bold text-center mx-auto border w-[50%] rounded-full bg-yellow-200 text-black">
        Add Notes
      </h2>
      <form
        className="flex justify-between items-start p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5 m-5 items-start w-1/2">
          {/* Title Input Field */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="border-2 rounded-md px-4 py-2 w-full text-2xl outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Details Input Field */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="border-2 rounded-md px-4 py-2 w-full h-30 flex flex-start text-2xl outline-none"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button className="border-2 rounded-md px-4 py-2 w-full bg-white text-black font-bold text-xl outline-none cursor-pointer active:scale-95">
            Add Note
          </button>
        </div>
        <img
          src="https://imgs.search.brave.com/rBPTRGTcq7UJkXz6NXNsSHUZSrvDk5wccnS_-YtjHpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw"
          alt=""
          className="w-90 h-80 rotate-y-180"
        />
      </form>

      {/* Result Div */}
      <div className="p-18 border-2 rounded-xl bg-gray-900">
        {/* Header */}
        <h2 className="text-6xl font-bold text-center mx-auto border w-[50%] rounded-full bg-yellow-200 text-black">
          Recent Notes
        </h2>

        {/* Card(i.e, task) Container */}
        <div className="flex flex-wrap gap-10 mt-10 justify-evenly">
          {/* Map through different Task to show them */}
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="w-40 h-52 text-black p-4 rounded-2xl bg-white relative"
              >
                <button
                  onClick={() => handleDelete(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-1 py-1 rounded-md text-xs cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>

                <div className="h-full pt-7 overflow-auto no-scrollbar">
                  <h3 className="text-center text-3xl font-bold leading-tight wrap-break-word">
                    {elem.title}
                  </h3>
                  <p className="mt-5 text-center font-medium text-gray-500 wrap-break-word">
                    {elem.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
