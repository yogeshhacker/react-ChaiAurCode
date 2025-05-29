import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
function Footer() {
  const { language } = useLanguage();
  return (
    <div>
      <h3>Footer</h3>
      <p>
        {" "}
        {language === "EN"
          ? "have a nice day!"
          : language === "HI"
          ? "आपका दिन शुभ हो!"
          : language === "FR"
          ? "passe une bonne journée!"
          : ""}{" "}
      </p>
    </div>
  )
}

export default Footer
