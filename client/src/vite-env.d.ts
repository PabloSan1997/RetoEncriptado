/// <reference types="vite/client" />

type Mandar = {
    mensaje: string
}

type Respuesta = {
    results: string
}

type Proceso = "encriptar" | "desencriptar";


type Children = {
    children: JSX.Element | JSX.Element[]
}
type Textos = {
    en: string,
    des: string
}
type Acciones = "desencriptar" | "encriptar" | "";
type Contexto = {
    textos: Textos,
    setTextos: {
        (a: Textos): void
    },
    accion: Acciones,
    setAccion: {
        (a: Acciones): void
    },
    activar: boolean,
    setActivar: {
        (a: boolean): void
    },
    loading:boolean,
    setLoading:{
        (a:boolean):void
    }
}

type Info = {
    results: string
}
type Solicitud = {
    method: string,
    headers: {
        "Content-Type": string,
        "entrada": string
    },
    body: string
}