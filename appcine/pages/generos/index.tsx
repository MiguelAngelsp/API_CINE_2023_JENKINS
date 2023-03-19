import { useGeneros } from '../../hooks/useGeneros';
import { GenerosList } from '../../components/generos/generosList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const IndexPage = () => {
    const { generos, isLoading } = useGeneros('/generos');
    const respuesta = useGeneros('/generos');
    console.log(respuesta);
    console.log(isLoading, "c=", generos);
    return (
        <PublicLayouts>
            <h2>Sección Generos</h2>
            {
                (isLoading)
                    ? <GenerosList generos={generos} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage