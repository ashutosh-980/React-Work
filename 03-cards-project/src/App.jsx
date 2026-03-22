import Card from "./components/Card";
import { jobs } from "./components/JobData";

const App = () => {
  return (
    <div className="parent">
      {jobs.map(function (job, index) {
        return (
          <Card
            logo={job.logo}
            company={job.company}
            post={job.posted}
            role={job.role}
            type={job.type}
            level={job.level}
            salary={job.salary}
            location={job.location}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;
