export interface BarraLateral {
    proximosPartidos:     ProximosPartidos;
    documentos:           Documentos;
    patrocinadores:       ImagenesEnlazadas;
    redes:            ImagenesEnlazadas;
}

export interface Documentos {
    view:    boolean;
    title:   string;
    objects: DocumentosObject[];
}

export interface DocumentosObject {
    literal: string;
    url:     string;
}

export interface ImagenesEnlazadas {
    view:    boolean;
    title:   string;
    objects: ImagenEnlazadasObject[];
}

export interface ImagenEnlazadasObject {
    url:    string;
    imagen: string;
    alt:    string;
}

export interface ProximosPartidos {
    view:    boolean;
    title:   string;
    objects: partidoObject[];
}

export interface partidoObject {
    equipo: string;
    fecha:  string;
    url:    string;
}
