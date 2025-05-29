import { createContext , useContext , useState , useEffect } from "react"; 

const LanguageContext = createContext();

export function LanguageProvider({children}) {
	const [language, setLanguage] = useState( () => {
		return localStorage.getItem("languageSelect") || "";
	} );

	useEffect( () => 
		{ 
			return localStorage.setItem("languageSelect",language) 
		},[language]);


	return (
		<LanguageContext.Provider value = {{language,setLanguage}}>
			{children}
		</LanguageContext.Provider>
		);
}

export function useLanguage() {
	return useContext(LanguageContext);
}