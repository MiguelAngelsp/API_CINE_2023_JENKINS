import { usePeliculas } from "@/hooks/usePeliculas";
import { PublicLayouts } from "@/layouts/PublicLayouts";
import { useRouter } from "next/router";
import { IPelicula } from "@/interfaces/peliculas";
import { PeliculasDetails } from "@/components/peliculas/PeliculasDetails";

interface Props {
  ID: string
}

const PeliculaPage = () => {
  const router = useRouter();
  console.log(router)
  const ID = router.query
  const { peliculas, isLoading } = usePeliculas(`/peliculas/${ ID.id }`);
  const pelicula= peliculas[0] || {} as IPelicula;
  return (
    <PublicLayouts>
      <h2>Detalle de la pelicula {ID.id} {`${router.query.id}`}</h2>
      <PeliculasDetails pelicula={pelicula} />
    </PublicLayouts>

  )
}

export default PeliculaPage