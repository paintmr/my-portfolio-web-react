import React from 'react'
import "../styles.css"

export default function Li2(props) {
  return (
    <p className='margin-t-b'><i className="fa-regular fa-star i-margin-r"></i>{props.children}
    </p>
  )
}
