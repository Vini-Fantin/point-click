
import { getItems } from "../api/items";
import JogarPage from "@/components/pages/JogarPage";

export default async function Page() {
  
  const items = await getItems()

  return (
    <div className="w-screen h-screen bg-orange-400">
      <JogarPage items={items} jogadorNome={"Teste"}></JogarPage>
    </div>
  );
}
