import { useState, useEffect } from 'react'


export default function asyncComponent(dynamicImportComponent) {
  // 不能直接return mod.default：
  // return dynamicImportComponent().then((mod) => {
  //   return mod.default
  // })

  // 必須把mod.default掛載在React組件上，把組件return出去，否則asyncComponent()返回的是Promise對象，沒法用
  function AsyncComponent() {
    const [Component, setComponent] = useState(null)
    useEffect(() => {
      dynamicImportComponent().then((mod) => {
        setComponent(mod.default)
      })
    }, [])
    return Component ? Component : null
  }
  return AsyncComponent

}