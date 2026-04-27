import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  console.log(params.courseID);
  return (
    <div className="min-h-screen text-8xl underline flex justify-center items-center capitalize">
      <h2>{params.courseID} Courses Detail Page</h2>
    </div>
  );
};

export default CourseDetails;
