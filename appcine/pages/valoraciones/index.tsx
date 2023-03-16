import { Button } from "@mui/material";
import { NextPage } from "next";
import { ValoracionesList } from '../../components/valoraciones/valoracionesList';
import { Mundo } from '../../components/Mundo';
import { useValoraciones } from "@/hooks/useValoraciones";
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { valoraciones, isLoading } = useValoraciones('/valoraciones');
    const respuesta = useValoraciones('/valoraciones');
    console.log(respuesta);
    console.log(isLoading, "c=", valoraciones);
    return (
        <PublicLayouts>
            <h2>Sección Valoraciones</h2>
            {
                (isLoading)
                    ? <ValoracionesList valoraciones={valoraciones} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default indexPage