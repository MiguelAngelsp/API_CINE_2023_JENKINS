// Generated by https://quicktype.io

export interface IValoraciones {
    ID: string;
    UsuarioID: string;
    Puntuacion: number;
    Comentario: string;
    usuario: IUsuarios
}
export interface IUsuarios {
    ID: string;
    DNI: string;
    Nombre: string;
    Apellidos: string;
    Direccion: string;
    Fecha_nacimiento: string;
    Tarjeta_banco: string;
}
