import React, {useEffect} from "react";
import { Card, CardBody } from "reactstrap";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Header = () =>{
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      }, []);
    return(
        <div >
           <Card className="my-2 bg-warning">
            <CardBody>
            <h1 className="text-center my-4">{t("H-P")}</h1>
            </CardBody>
           </Card>
        </div>
    );
}

export default Header;