import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLang = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <h3>Language Selector</h3>
        <select id="lang" name="lang" value={language} onChange={ handleLang}>
          <option value="">-- Select Language --</option>
          <option value="EN">English</option>
          <option value="HI">Hindi</option>
          <option value="FR">French</option>
        </select>
      
    </div>
  );
}

export default LanguageSelector;
