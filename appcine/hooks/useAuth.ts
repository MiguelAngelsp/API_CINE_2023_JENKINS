import useSWR, { SWRConfiguration } from 'swr';
import { IAuth } from '../interfaces/auth/IAuth';


export const useAuth = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IAuth[]>(`http://149.102.139.206:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        auth: data || [],
        isLoading: !error && data,
        isError: error
    }
}