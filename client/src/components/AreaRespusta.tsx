import { MiContexto } from "../contexto"
import muneco from "../assets/Muñeco.svg";
import { Cargando } from "./Cargando";

export default function AreaRespusta() {
  const { textos, loading } = MiContexto();
  const copiar = (parrafo: string) => {
    navigator.clipboard.writeText(parrafo);
  }
  return (
    <div className='area-respusta'>
      {!loading?(<>
        {textos.des ?
          (<div className="res">
            <p className="respuesta">{textos.des}</p>
            <button className="boton" onClick={() => copiar(textos.des)}>Copiar</button>
          </div>)
          :
          (<>
            <img src={muneco} alt="Muñeco" />
            <h2>Codificar</h2>
            <p className="texto">Escriba un mensaje para encriptarlo o desencriptar</p>
          </>)}
      </>):<Cargando/>}
    </div>
  )
}
