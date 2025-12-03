import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../App";

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Carregando...</p>;
  if (!pokemon) return <p className="p-6">Pokémon não encontrado!</p>;

  return (
   <div className="min-h-screen bg-gray-600 p-25">

  <Link to="/" className="text-blue-600 underline block mb-4">
    ← Voltar
  </Link>

  {/* Título + Imagem */}
  <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold capitalize text-gray-900">
      {pokemon.name}
    </h1>

    <img
      src={pokemon.sprites.other["official-artwork"].front_default}
      className="w-60 mt-6 drop-shadow-xl"
    />
  </div>

  {/* Grid das informações */}
  <div className="mt-10 grid md:grid-cols-2 gap-6">

    {/* Card de informações */}
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-600">
      <h2 className="text-xl font-semibold mb-3 text-gray-900">Informações</h2>

      <p className="text-gray-800">
        <strong className="text-gray-900">ID:</strong> {pokemon.id}
      </p>

      <p className="text-gray-800">
        <strong className="text-gray-900">Peso:</strong> {pokemon.weight}
      </p>

      <p className="text-gray-800">
        <strong className="text-gray-900">Altura:</strong> {pokemon.height}
      </p>
    </div>

    {/* Card de tipos — CINZA E DESTACADO */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg border border-gray-600">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">Tipos</h3>

      <div className="flex gap-2 flex-wrap">
        {pokemon.types.map((t: any) => (
          <span
            key={t.type.name}
            className="px-4 py-2 bg-white border border-gray-400 rounded-lg shadow text-gray-900 font-medium capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>

  </div>
</div>




  );
}
