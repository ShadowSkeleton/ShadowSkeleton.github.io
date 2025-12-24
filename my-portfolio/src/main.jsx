import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Only use StrictMode in development for better production performance
const root = createRoot(document.getElementById('root'));
root.render(<App />);
