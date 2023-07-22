import React, { useEffect } from "react";
import './App.css';
import { Button, Container, Row, Col } from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from './componenets/Home';
import Header from './componenets/Header';
import Course from './componenets/Course';
import Allcourses from './componenets/Allcourses'
import AddCourse from './componenets/AddCourse';
import Menus from './componenets/Menus';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    state: "us",
  },
  {
    code: "hi",
    name: "Hindi",
    state: "north",
  },
  {
    code: "ta",
    name: "Tamil",
    state: "tam",
  },
  {
    code: "te",
    name: "Telagu",
    state: "ap",
  },
];

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const btnHandle= ()=>{
    toast.success("Done")
  }
  return (
    <div>      
      <BrowserRouter>
      
        <ToastContainer />
        <Container>
          <Header />
        <div className="dropdown d-flex justify-content-end">
        <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            lang
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, state }) => (
              <li key={state}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
