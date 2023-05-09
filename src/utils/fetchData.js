export const fetchData = async (url, setData, dispatch, action) => {
  dispatch(action(true))
  const response = await fetch(url)
  const data = await response.json();
  await setData(data)
  await dispatch(action(false))
}