import { useEffect } from 'react';
import { LangProvider, useLang } from './lang';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ComparisonSlider from './components/ComparisonSlider';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function AppInner() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <ComparisonSlider />
      <Gallery />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
