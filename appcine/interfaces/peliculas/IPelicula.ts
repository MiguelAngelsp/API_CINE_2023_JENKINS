// Generated by https://quicktype.io

export interface IPelicula {
    ID: string;
    Titulo: string;
    Descripcion: string;
    Precio: number;
    GeneroID: string;
    ValoracionID: string;
    Imagen: string;
    genero: IGeneros
    valoraciones: IValoraciones
}
export interface IGeneros {
    ID: string;
    Genero: string;
}
export interface IValoraciones {
    ID: string;
    UsuarioID: string;
    Puntuacion: number;
    Comentario: string;
}


