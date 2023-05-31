import React from 'react';
import { procesar } from '../Api/obtenerDatos';

const Contexto = React.createContext({});


export function Provedor({ children }: Children) {
    const [textos, setTextos] = React.useState<Textos>({ en: "", des: "" });
    const [accion, setAccion] = React.useState<Acciones>("");
    const [activar, setActivar] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        if (textos.en.length!=0) {
            console.log("LLEga");
            (async () => {
                const solicitud = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "entrada": "contra123"
                    },
                    body: JSON.stringify({
                        mensaje: textos.en
                    })
                }
                try {
                    const dato = await procesar(accion, solicitud);
                    setTextos({ en: "", des: dato.results });
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                }
            })();
        }else{
            setTextos({...textos, des:""})
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activar]);
    return (
        <Contexto.Provider
            value={
                {
                    textos,
                    setTextos,
                    accion,
                    setAccion,
                    activar,
                    setActivar,
                    loading,
                    setLoading
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}

export const MiContexto = () => React.useContext(Contexto) as Contexto;