import { App } from "~/app/_components/app";
import { api } from "~/trpc/server";

export interface movieMusicItem {
  id: number,
  name: string,
  s3id: string,
  img: string,
  type: number,
}

export default async function Home() {
  const movies = await getAllMovies();
  const music = await getAllMusic();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <App movies={movies} music={music}/>
    </main>
  );
}

async function getAllMovies() {
  const tmpMov = await api.post.getAllMovies();
  return tmpMov;
}

async function getAllMusic() {
  const tmpMus = await api.post.getAllMusic();
  return tmpMus;
}