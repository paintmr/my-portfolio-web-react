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

    // 這裡直接return Component就好，不要像類式組件的render()的return一樣寫成下面第20行的代碼。用第20行這種寫法，會報錯。
    // return Component ? <Component {...props} /> : null
    return Component ? Component : null

  }
  return AsyncComponent

}