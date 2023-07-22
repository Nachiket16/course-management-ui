import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const AddCourse = () =>{
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      }, []);
    useEffect(()=>{
        document.title="Add Course"
    }, []);

    const [course, setCourse] = useState({});
    //form handeler function

    const handleForm = (e)=>{
        console.log(course);
        postDatatoServer(course );
        e.preventDefault();
    }
    //Creating funtion to post data on server

    const postDatatoServer = (course) => {
        axios.post(`${base_url}/courses`,course)
        .then((response)=>{
                console.log(response)
                alert("success")
            },(error)=>{
                console.log(error)
                alert("error")
            }
        )
    }
    
    return(
        <div>
            <h1 className="text-center my-3">{t("AC_H")}</h1>
            <Form style={{marginLeft:'20px', marginRight:'20px'}}
                onSubmit={handleForm}>
                <FormGroup>
                    <label>{t("AC_F1_ID")}</label>
                    <Input 
                        type="text" 
                        placeholder="Enter Here" 
                        name="userId" 
                        id="userId"
                        onChange={(e)=>{
                            setCourse({...course, id: e.target.value})
                        }}
                         />
                </FormGroup>
                <FormGroup>
                    <label for="title">{t("AC_F1_TIT")}</label>
                    <Input type="text" placeholder="Enter Title" name="title" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="description">{t("AC_F3_DESC")}</label>
                    <Input type="textarea" placeholder="Enter description" name="description" id="description" style={{height: 130}}
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">{t("AC_BUT1")}</Button>
                    <Button color="warning" style={{marginLeft:'20px'}}>{t("AC_BUT2")}</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse