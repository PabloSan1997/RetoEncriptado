import { MiContexto } from "../contexto"


export default function AreaBotones() {
  const {setActivar, activar, setAccion, setLoading} = MiContexto();
  const encriptar = () =>{
    setAccion("encriptar");
    setActivar(!activar);
    setLoading(true);
  }
  const desencriptar = () =>{
    setAccion("desencriptar");
    setLoading(true);
    setActivar(!activar);
  }
  return (
    <div className="areabotones">
        <button className="boton" onClick={encriptar}>Encriptar</button>
        <button className="boton" onClick={desencriptar}>Desencriptar</button>
    </div>
  )
}
