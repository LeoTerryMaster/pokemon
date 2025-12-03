import { useEffect, useState } from "react";
import { api } from "../App";
import { Link } from "react-router-dom";

type PokemonItem = {
  name: string;
  url: string;
};

export default function Home() {
  const [list, setList] = useState<PokemonItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/pokemon?limit=151")
      .then((res) => setList(res.data.results))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-4">

      {list.map((poke, index) => {
        const id = index + 1;
        return (
          <Link
            to={`/pokemon/${id}`}
            key={id}
            className="p-4 bg-gray-200 border rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              className="w-20 mx-auto"
            />
            <p className="text-center mt-2 capitalize font-medium">{poke.name}</p>
          </Link>
        );
      })}
    </div>

  );
}
