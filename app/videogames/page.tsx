import Nav from "../_componentes/Nav";
import GamesVideos from "../_componentes/videogames/GamesVideos";


export default function Videogames() {

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-start gap-6 text-green-500">
      <Nav/>
      <GamesVideos />
    </main>
  )
}