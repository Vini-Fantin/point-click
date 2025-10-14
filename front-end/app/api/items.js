"use server"

export async function getItems() {
  const res = await fetch("http://localhost:8000/items-index")

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.status}`)
  }

  try {
    const data = await res.json(res)
    console.log(data)
    return data

  } catch (err) {
    return []
  }
}
