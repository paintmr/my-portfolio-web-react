import React from 'react'

export default function DevProject12() {
  return (
    <>
      <li><i className="fa-solid fa-circle-check"></i>
        The app ui part consists of the following pages: <br />
        Home → ProductDetails;     <br />
        Search → SearchRedults;      <br />
        Login → UserCentre → Purchase
      </li>
      <li><i className="fa-solid fa-circle-check"></i>
        The Redux in this project has a "duck structure". In each Redux file, there are actions, reducers, and selectors.

        The redux file consists of the following folders and file: middleware, modules, and store.js
      </li>
      <li><i className="fa-solid fa-circle-check"></i>Modules <br /> <br />

        The module file consists of two types of files: the 'files to store different types of data' (e.g. products.js, and comments.js in the entities folder), and the 'files  for each page' (e.g. HomePage, ProductDetailPage, LoginPage).<br /> <br />

        Take redux/modules/home.js and redux/modules/entities/products.js for example.<br /> <br />

        The home.js file contains all the actions, reducers, and selectors for the HomePage. Once the HomePage is mounted, home.js dispatches request actions to fetch product list data. The actions are processed by reducers in both home.js and products.js. The state in home.js keeps product id arrays for different sections of the HomePage, while the state in products.js keeps all product data. Then the selectors in home.js get all product data from products.js based on the id arrays home.js keeps.
      </li>
      <li><i className="fa-solid fa-circle-check"></i>Middleware <br /> <br />

        The dataFetching.js file in the Middleware folder is used to dispatch data-fetching actions (request-sent, request-success, request-failure).<br /> <br />

        All data-request is sent by this middleware, which prevents redundant code.<br /> <br />

        The dataFetching.js file detects if the action contains the key 'FETCH_DATA' which contains a string array containing requestType, successType, and failureType. If the key 'FETCH_DATA' exists, the dataFetching.js file will dispatch these three request types. Otherwise, it will pass the action to the next reducer/middleware.</li>
      <li><i className="fa-solid fa-circle-check"></i>Home page<br /> <br />

        On the Home page, when it is mounted, it displays product data in the discount list and recommended list.<br /> <br />

        When the user scrolls the screen, she can get more of the recommended list until she gets the end of the list.</li>
      <li><i className="fa-solid fa-circle-check"></i>Product Details page<br /> <br />

        Every time the user click a product, she is directed to the detail page of that product, which shows not only product details but also shops related to the product.<br /> <br />

        To make this works, redux provides not only product details but also shops related to the product.<br /> <br />

        When the user clicks the two "Buy Now" buttons, she is directed to the Purchase page.</li>
      <li><i className="fa-solid fa-circle-check"></i>Search page<br /> <br />

        When the user clicks the search bar at the top of the Home page, she is directed to the Search page.<br /> <br />

        When she inputs something into the input box, a related search keyword list occurs for her reference. When she clickes the little corss icon at the end of the input box, she clears her input and the related keyword list disappears. When she clicks the cancel button, she goes back to the Home page.<br /> <br />

        When she clicks the keyword either in the related search keyword list or the popular search keyword list, they keyword is added to the search history list, and she is directed to the search result page.
      </li>
      <li><i className="fa-solid fa-circle-check"></i>Search Results page <br /> <br />

        On the search results page, she user sees shops related to the keyword she has just clicked.</li>
      <li><i className="fa-solid fa-circle-check"></i>Login page<br /> <br />

        When the user clickes the human figure icon on the top right of the Home page, she is either directed to the UserCentre page if she has logged in or redirected to the Login page if she has not logged in.<br /> <br />

        Building a PrivateRoute component can make this happen.<br /> <br />

        When the user has inputed a random number and a password, she can login. And the number and login status are stored by localStorage.</li>
      <li><i className="fa-solid fa-circle-check"></i>UserCentre page-Display Orders<br /> <br />

        When the user is on the UserCentre page, she can click the home button on the top left to go back to the Home page and the logout button to log out.<br /> <br />

        When the use clicks tabs like "All", "Available", "Completed", and "Refund", she can see differnt order list.</li>
      <li><i className="fa-solid fa-circle-check"></i>UserCentre page-Delete Orders<br /> <br />

        To handle deletion and comments conveniently, change UserMain from a UI Component to a Container

        When the user clicks the delete button, she can delete the order.</li>
      <li><i className="fa-solid fa-circle-check"></i>UserCentre page-Comment Orders<br /> <br />

        Only completed orders which have not been commented have a comment button.<br /> <br />

        The user can click the comment button and then see a textarea to write comments. Shen can also click the star bars to give star ranking.<br /> <br />

        If she has written something in the comment textarea or clicked the ranking stars of an order, and then she clicks the comment button of another order, a warming dialog pops up to tell her that her comment has not been saved.<br /> <br />

        The id of the newly added comment is stored with the related order in redux/modules/entities/orders.<br /> <br />

        The newly added comment object is stored in redux/modules/entities/comments.<br /> <br />

        When the comment has been stored, a success message pops out.</li>
      <li><i className="fa-solid fa-circle-check"></i>Purchase page<br /> <br />

        When the user clicks the two buy buttons on the ProductDetails page, she is directed to the Purchase page.<br /> <br />

        When the user has placed orders, a dialog pops out to show the success.<br /> <br />

        When the user clicks the word 'my orders', she is directed to the UserCenter page to vew her orders including the newly-added ones.</li>
      <li><i className="fa-solid fa-circle-check"></i>Reselect<br /> <br />

        Use Reselect to prevent some unnecessary selector execution.

        Reselect is applied to ordersSelector in src/redux/modules/usercentre.js</li>
      <li><i className="fa-solid fa-circle-check"></i>Dynamic imports and route-centric code splitting<br /> <br />

        In the folder src/utils, a Component file called AsyncComponent.js is created. AsyncComponent.js contains a function named asyncComponent, and it returns a Component if it is executed. The function asyncComponent receives the dynamically importing Component process as a parameter.<br /> <br />

        In src/App.js, instead of importing Components directly, dynamically import each Component and pass this dynamically importing process as a parameter to the function asyncComponent.<br /> <br />

        In this way, each Component is imported dynamically based on routes, making the app more efficient.</li>

    </>
  )
}
