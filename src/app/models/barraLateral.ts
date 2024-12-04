export interface BarraLateral {
    documentos:     Documento[];
    patrocinadores: Patrocinadore[];
}

export interface Documento {
    literal: string;
    destino: string;
}

export interface Patrocinadore {
    url:    string;
    imagen: string;
    alt:    string;
}