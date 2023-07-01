import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [jobsData, setJobsData] = useState([]);
  const [count, setCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const fetchData = async (lower, upper) => {
    setLoading(true);
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    const data = await res.json();
    const detailedJobs = data.slice(lower, upper).map(async (id) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const data = await res.json();
      return data;
    });

    const newJobsData = await Promise.all(detailedJobs);
    setJobsData([...jobsData, ...newJobsData]);
    setLoading(false);
  };

  const loadMoreJobs = () => {
    let newCount = count + 6;
    setCount(newCount);
    fetchData(newCount - 6, newCount);
  };

  useEffect(() => {
    fetchData(0, 6);
  }, []);

  return (
    <div className="App">
      {loading && <Modal />}
      {jobsData.map((job) => (
        <h1 key={job.id} className="job">
          {job.title}
        </h1>
      ))}
      {!loading && (
        <button onClick={loadMoreJobs} className="button">
          Load more Jobs
        </button>
      )}
    </div>
  );
}

export default App;
