import useSWR, { SWRConfiguration } from 'swr';
import { IValoraciones } from '../interfaces/valoraciones/IValoraciones';


export const useValoraciones = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IValoraciones[]>(`http://149.102.139.206:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        valoraciones: data || [],
        isLoading: !error && data,
        isError: error
    }
}