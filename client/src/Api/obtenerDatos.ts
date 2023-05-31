

export async function  procesar(accion:string, solicitud:Solicitud):Promise<Info> {
        const data = await fetch(`https://encriptador.onrender.com/api/v1/proceso/${accion}`, solicitud);
        const info = await data.json();
        if(!data.ok){
            throw `${info.error} ${info.message}`;
        }
        return info
}