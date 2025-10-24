
import JogarPage from "../../components/pages/JogarPage";
import { getItems } from "../api/item";
import { getRoom } from "../api/rooms";
import { getRooms } from "../api/rooms";


export default async function Page() {

  const roomData = await getRooms()

  return (
    <JogarPage rooms={roomData} />
  );
}
