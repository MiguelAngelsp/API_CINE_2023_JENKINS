import useSWR, { SWRConfiguration } from 'swr';
import { IUsuarios } from '../interfaces/usuarios/IUsuarios';


export const useUsuarios = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IUsuarios[]>(`http://149.102.139.206:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        usuarios: data || [],
        isLoading: !error && data,
        isError: error
    }
}