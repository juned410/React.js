import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

export const API = () => {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("response object check---->", res.data);
        setInfo(res.data);
      })
      .catch((error) => console.log("aaya kya data?", error));
  }, []);
  // const getEmployeeData=async()=>{
  //       const empData= await axios.get(url)
  //       setInfo(empData);
  // }
  const getTable=()=>{
    setState(!state)
  }
  return (
    <div>
      <div>
        <Button onClick={(e)=>{getTable()}}>GetEmployee</Button>
      </div>
      {state &&
      <div>
        <h1>Fetching data from API</h1> 
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th> NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>CITY</th>
              <th>STREET</th>
              <th>ZIPCODE</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>COMPANY</th>
            </tr>
          </thead>
          <tbody>
            {info.map((aa) => {
              return (
                <tr>
                  <td>{aa.id}</td>
                  <td>{aa.name}</td>
                  <td>{aa.username}</td>
                  <td>{aa.email}</td>
                  <td>{aa.address.city}</td>
                  <td>{aa.address.street}</td>
                  <td>{aa.address.zipcode}</td>
                  <td>{aa.phone}</td>
                  <td>{aa.website}</td>
                  <td>{aa.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>}
    </div>
  );
};