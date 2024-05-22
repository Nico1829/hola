import ItemCategoryProduct from "@/components/principal/ItemCategoryProduct";
import ItemProduct from "@/components/principal/ItemProduct";
import { Separator } from "@/components/ui/separator"
import { useStore } from "@/store"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrincipalView() {
  const products = useStore(state => state.products);
  
  const [word, setWord] = useState("");

  const setFilteredProducts = useStore(state => state.setFilteredProducts);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFilteredProducts(word);
    navigate('/resultados');
  }

  return (
    <main className="pt-10 pb-24">
      <div className="px-16">
        <form onSubmit={handleSubmit} className="flex items-center gap-x-3 mb-10">
          <input className="flex-1 flex items-center px-6 h-14 rounded-md border border-slate-400" type="text" placeholder="Busca productos por nombre..." onChange={(e) => setWord(e.target.value)} />
          <button className="h-14 w-36 rounded-md text-lg text-white bg-slate-700" type="submit">Buscar</button>
        </form>

        <div className="flex justify-between mb-16">
          {products.slice(0, 3).map(product => (
            <ItemCategoryProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-between mb-7">
          {products.slice(0, 5).map(product => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-between mb-11">
          {products.slice(5, 10).map(product => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Separator className="bg-black h-2.5 mb-11" />

      <div className="px-16">
        <h2 className="text-3xl uppercase mb-12">Nuevos</h2>

        <div className="h-[539px] flex gap-x-6 mb-9">
          <div className="flex flex-col flex-1 gap-y-9">
            <img className="h-[400px] border rounded-xl flex justify-center items-center" src="/foto01.jpeg" />
            <div className="flex flex-col gap-y-4">
              <p className="text-2xl">Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada</p>
              <span className="text-sm">Learn More</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-4">
              <img className="h-[186px] flex justify-center items-center border rounded-xl" src="/foto02.jpeg" />
              <div className="flex flex-col gap-y-1">
                <p className="text-2xl">GI Joe Classified Series Big Boa, Airborne & More</p>
                <span className="text-sm">Learn More</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <img className="h-[186px] flex justify-center items-center border rounded-xl" src="/foto03.jpeg" />
              <div className="flex flex-col gap-y-1">
                <p className="text-2xl">Spawn 30 Anniversary</p>
                <span className="text-sm">Learn More</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {products.slice(10, 15).map(product => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

    </main>
  )
}