export const fetchData = async (url, setData) => {
  const response = await fetch(url)
  const data = await response.json();
  setData(data)
}