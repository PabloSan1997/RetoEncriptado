import { MiContexto } from "../contexto"


export function AreaTexto({children}:Children) {
  const {textos, setTextos} = MiContexto();
  return (
    <div className="area-texo">
        <textarea 
        name="" 
        id="areatext" 
        placeholder="Escribir..." 
        onChange={e => setTextos({...textos,en:e.target.value})}
        value={textos.en}
        ></textarea>
        {children}
    </div>
  )
}
