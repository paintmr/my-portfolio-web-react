import React from 'react'
import "./styles.css"
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'


export default function Loader() {
  const loading = useSelector((state) => state.loader.loading)

  // useEffect(() => {
  //   console.log('Loader:' + loading)
  // }, [loading])

  return (
    <div className={`page-loader ${loading ? '' : 'hide'}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
