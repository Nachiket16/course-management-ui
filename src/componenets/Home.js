import React, {useEffect} from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Home = () =>{
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      }, []);
    useEffect(()=>{
        document.title="Welcome Home"
    }, []);
    return(
        <div className="text-center">
                <h1>{t("welcome_message")}</h1>
                <p>
                {t("WELCOME")}
                </p>
        </div>
    );
}

export default Home;