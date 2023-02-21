export const fetchRequest = async(url, count) => {
  const response = await fetch(`${url}`, {
    headers: {
          'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
        },
  })
  const data = (await response.json()).articles;  
  return data.slice(0, count);
}
