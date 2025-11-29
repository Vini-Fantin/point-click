
import JogarPage from "../../components/pages/JogarPage";
import { getRooms } from "../api/rooms";


export default async function Page() {

  const roomData = await getRooms()

  return (
    <JogarPage rooms={roomData} />
  );
}
