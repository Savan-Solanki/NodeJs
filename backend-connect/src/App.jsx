import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";

function App() {
  const [data, setData] = useState("");

  // For Get api
  useEffect(() => {
    fetch("http://localhost:8001")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // For Post api
  // useEffect(() => {
  //   fetch("http://localhost:8001",{
  //     method:"POST"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // For Put api
  // useEffect(() => {
  //   fetch("http://localhost:8001",{
  //     method:"Put"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // For Delete api
  // useEffect(() => {
  //   fetch("http://localhost:8001",{
  //     method:"DELETE"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // For Patch api
  // useEffect(() => {
  //   fetch("http://localhost:8001",{
  //     method:"PATCH"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <>
      <h1>{data}</h1>
      <Link to="/First">Go To First</Link>
    </>
  );
}

export default App;




