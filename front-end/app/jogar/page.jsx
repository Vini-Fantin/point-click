import SalaDeEstar from "@/components/pages/SalaDeEstar";
import { getItems } from "../api/items";


export default async function Page() {

  const data = await getItems()
  console.log(data)
  const items = data.filter((item) => item.places_id == 1)



  return (
    <div className="w-screen h-screen bg-orange-400">


      <SalaDeEstar items={items}></SalaDeEstar>
    </div>
  );
}
