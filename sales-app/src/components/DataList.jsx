import React, { useState, useEffect } from "react";
import { DataItem } from "./DataItem";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export const DataList = () => {
  const [data, setData]=useState([]);
  const [filtdata, setFiltdata] = useState([]);
  const [txtSearch, setTxtSearch] = useState("");
  const handleSearch = () => {
    const filtereddata = data.filter((item) =>
      item.title.toUpperCase().includes(txtSearch.toUpperCase())
    );
    txtSearch !== "" ? setFiltdata(filtereddata) : setFiltdata(data);
  };
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      console.log(res)
      setData(res.data);
    });
  }, []);
  useEffect(()=>{
    handleSearch();
  },[txtSearch,data]);
 
  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            onChange={(e) => setTxtSearch(e.target.value)}
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        <Col lg={2}>
        </Col>
      </Row>
      <Row>
        {filtdata.map((item, index) => (
          <Col lg={3}>
            <DataItem item={item} index={index}  />
          </Col>
        ))}
      </Row>
    </div>
  );
};