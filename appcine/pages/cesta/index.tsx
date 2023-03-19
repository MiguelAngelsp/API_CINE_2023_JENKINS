import { useCesta } from '../../hooks/useCesta';
import { CestaList } from '../../components/cesta/cestaList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const IndexPage = () => {
    const { cesta, isLoading } = useCesta('/cesta');
    const respuesta = useCesta('/cesta');
    console.log(respuesta);
    console.log(isLoading, "c=", cesta);
    return (
        <PublicLayouts>
            <h2>Sección Cesta</h2>
            {
                (isLoading)
                    ? <CestaList cesta={cesta} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage