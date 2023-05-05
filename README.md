# My Portfolio Web

## Tech

- React 18
- React function components & React hooks
- React Router 6
- Dynamic imports
- Fontawesome
- Google Fonts

## 網站頁面

- Home
- Design Portfolio
- Development Portfolio
- About me
- Contact me

## 網站組件

系統組件：
index.js 包裹 App.js

在 App.js 裡，根據不同的路由，顯示不同的頁面：

- Home
- Portfolio（Design 或者 Development） - PortfolioItem 組件
- Project - ProjectInfo 組件（如果 project 的 generalInfo 比較多，專門給該 project 寫一個 generalInfo 的組件，動態引入）
- About
- Contact

各頁面公用組件

- Header
- Loader
- Overlay
- BackgroundCircles

## CSS

src/index.css 中放置 css 的全局設置代碼。
各個頁面/組件有自己的 styles.css 文件。

## Project data info

各個項目的介紹數據放在了 public/data 裡面，通過 fetch()去獲取。

## Utils 文件夾

- fetchData.js

fetchData.js 封裝了 fetch()，用於獲取 public 的 data 數據

- asyncComponent.js

asyncComponent.js 封裝了動態引入組件功能。

## asyncComponent.js

asyncComponent.js 默認導出函數 asyncComponent()，接收參數 dynamicImportComponent。
dynamicImportComponent 是個函數，返回一個 promise，例如：

    const  DevProject12  =  asyncComponent(() =>
    import('../../components/ProjectInfo/Development/DevProject12'))

在 asyncComponent()中，不能直接：

    return dynamicImportComponent().then((mod) => {

    return console.log(mod.default)

    })

必須把這個 mod.default 掛載在 React 組件上，把組件 return 出去，否則 asyncComponent()返回的是 Promise 對象，沒法用。
