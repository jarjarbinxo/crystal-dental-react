import { createContext, useContext, useState } from 'react';

const LangContext = createContext({ lang: 'en', toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en');
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function t(lang, en, ar) {
  return lang === 'en' ? en : ar;
}
