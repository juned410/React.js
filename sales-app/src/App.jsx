import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./components/States/store/configStore";
import { CheckRedux } from "./components/CheckRedux";
import { Counter } from "./components/Counter";
import { ProductsList } from "./components/ProductsList";
import { DataList } from "./components/DataList";
import { NavLib } from "./react-navlib-pickupbiz";

import './App.css';

function App() {
  const localStore = configStore();
 
  const links = [
    {
      title: "Home",
      icon: "fa fa-home",
      url: "/",
    },
    {
      title: "Products",
      icon: "fa fa-phone-square",
      url: "/products",
    },
    {
      title: "Redux",
      icon: "fa fa-cogs",
      url: "/redux",
    },
    {
      title: "Counter",
      icon: "fa fa-cogs",
      url: "/",
    },
    {
      title: "Data",
      icon: "fa fa-cogs",
      url: "/data",
    },
    {
      title: "Simran",
      icon: "fa fa-phone-square",
      url: "/products",
    },
  ];
  return (
    <Provider store={localStore}>
    <BrowserRouter>
      <NavLib type="modern" links={links} />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/data" element={<DataList />} />
        <Route path="/redux" element={<CheckRedux/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
