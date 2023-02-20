export const fetchNews = async(url) => {
  const response = await fetch(url)
  const data = (await response.json()).articles;  
  return data
}

// export const fetchNews = async(url, country) => {
//   const response = await fetch(`${url}${country}`, {
//     headers: {
//           'X-Api-Key': '6e757689b57443ceb98baa29a280c31c'
//         },
//   })
//   const data = (await response.json()).articles;  
//   return data
// }


