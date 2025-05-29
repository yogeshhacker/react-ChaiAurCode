import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
function Header() {
  const { language } = useLanguage();

  const greeting = {
    EN: "Hello, User!",
    HI: "नमस्ते, उपयोगकर्ता!",
    FR: "Bonjour, utilisateur!",
  };

  return (
    <div>
      <h3>Header</h3>
      <p>{greeting[language] || "Please select a language."}</p>
    </div>
  );

}

export default Header;
