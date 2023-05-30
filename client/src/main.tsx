
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./estilos/index.scss";
import { Provedor } from './contexto/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provedor>
      <App />
    </Provedor>
)
