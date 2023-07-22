import React, {useEffect} from "react";
import { List, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Menus = () =>{
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      }, []);
    return( 
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
            {t("H_BUT")}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
            {t("AC_BUT1")}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>
            {t("View_Course")}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
            {t("About")}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
            {t("Contact")}
            </Link>
        </ListGroup>
    )
}

export default Menus