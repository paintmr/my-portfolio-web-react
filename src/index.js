import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'

// 獲取媒體查詢（responsive）的link標籤
const responsiveMedia = document.querySelector('link[href="media.css"]');
// 把媒體查詢（responsive）的css文件放到最末尾引入，這樣確保媒體查詢（responsive）代碼不會被其它CSS代碼覆蓋
document.head.appendChild(responsiveMedia);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
