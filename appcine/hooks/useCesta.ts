import useSWR, { SWRConfiguration } from 'swr';
import { ICesta } from '../interfaces/cesta/ICesta';


export const useCesta = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICesta[]>(`http://149.102.139.206:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        cesta: data || [],
        isLoading: !error && data,
        isError: error
    }
}