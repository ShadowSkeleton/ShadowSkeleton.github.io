import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageProvider from './i18n/LanguageProvider.jsx'
import { IconContext } from '@phosphor-icons/react'

// Only use StrictMode in development for better production performance
const root = createRoot(document.getElementById('root'));
root.render(<IconContext.Provider value={{ weight: 'light', 'aria-hidden': true }}><LanguageProvider><App /></LanguageProvider></IconContext.Provider>);
