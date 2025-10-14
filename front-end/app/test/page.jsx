import { getItems } from "../api/items"

export default async function Page() {

    const items = await getItems()

    return (
        <div>
            <p></p>
        </div>
    )
}