import Hero from './Hero';
import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-hidden bg-teal-900">
      <Hero />
      <Image src={"/pusheen-typing.gif"} priority className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" width="498" height="329" alt="A cute cat coding" />
    </main>
  );
}