
import JogarPage from "../../components/pages/JogarPage";
import { getItems } from "../api/item";
import { getRoom } from "../api/rooms";
import { getRooms } from "../api/rooms";


export default async function Page() {

  const roomData = await getRooms()

  return (
    <div className="w-screen h-screen bg-orange-400">
      <JogarPage rooms={roomData}></JogarPage>
    </div>
  );
}
