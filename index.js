import { createRoot } from 'react-dom/client';
import { App } from './src/App';
import 'normalize.css/normalize.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
