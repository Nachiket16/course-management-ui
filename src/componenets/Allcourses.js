import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Course from "./Course";

import base_url from "../api/bootapi";
import axios from "axios";

const Allcourses = () =>{

    useEffect(()=>{
        document.title="All Courses"
    }, []);
    
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`)
        .then((response) =>{
            toast.success("course has loaded")
            setCourses(response.data)
        },
        (error) =>{
            console.log(error);
            toast.error("Something went Wrong")
        }
        )
    }
        
        useEffect(()=>{
            getAllCoursesFromServer();
        }, []);
    
    const [courses, setCourses] = useState([]); //Hook->
    return (
        <div>
            <h3>All Course</h3>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item} />
                )) : "No course Found"
                
            }
        </div>
    );
}

export default Allcourses;