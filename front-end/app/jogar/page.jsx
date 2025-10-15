import SalaDeEstar from "@/components/pages/SalaDeEstar";
import { getItems } from "../api/items";


export default async function Page() {

  const user = {name: 'teste', score: 0}
  sessionStorage.setItem(JSON.stringify(user))

  const data = await getItems()
  const items = data

  return (
    <div className="w-screen h-screen bg-orange-400">


      <SalaDeEstar items={items}></SalaDeEstar>
    </div>
  );
}
