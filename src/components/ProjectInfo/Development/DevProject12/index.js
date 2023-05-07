import React from 'react'
import Li1 from "../../Li1"
import Li2 from "../../Li2"

import home1 from '../../../../assets/img/development-portfolio-mint-store-home1.png'
import home2 from '../../../../assets/img/development-portfolio-mint-store-home2.png'
import productDetails1 from '../../../../assets/img/development-portfolio-mint-store-product-details1.png'
import productDetails2 from '../../../../assets/img/development-portfolio-mint-store-product-details2.png'
import search1 from '../../../../assets/img/development-portfolio-mint-store-search1.png'
import search2 from '../../../../assets/img/development-portfolio-mint-store-search2.png'
import searchResults from '../../../../assets/img/development-portfolio-mint-store-search-results.png'
import login from '../../../../assets/img/development-portfolio-mint-store-login.png'
import UserCentre from '../../../../assets/img/development-portfolio-mint-store-user-centre.png'
import purchase from '../../../../assets/img/development-portfolio-mint-store-purchase.png'
import redux from '../../../../assets/img/development-portfolio-mint-store-redux.png'
import dataFetching from '../../../../assets/img/development-portfolio-mint-store-middleware-data-fetching.png'
import reactSlick from '../../../../assets/img/development-portfolio-mint-store-react-slick.png'
import reselect from '../../../../assets/img/development-portfolio-mint-store-reselect.png'
import dynamicImports1 from '../../../../assets/img/development-portfolio-mint-store-dynamic-imports1.png'
import dynamicImports2 from '../../../../assets/img/development-portfolio-mint-store-dynamic-imports2.png'

export default function DevProject12() {
  return (
    <>
      <Li1>The app consists of the following pages:
        <Li2>Home 👉 ProductDetails</Li2>
        <Li2>Search 👉 SearchRedults</Li2>
        <Li2>Login 👉 Purchase 👉 UserCentre</Li2>
      </Li1><br />

      <Li1>Home page

        <Li2>On the Home page, when it is mounted, it displays product data in components like the discount list and recommended list.</Li2>

        <Li2>When the user scrolls the screen, she can get more of the recommended list until she gets the end of the list.</Li2>
        <img src={home1} alt="home1" />
        <img src={home2} alt="home2" />
      </Li1><br />

      <Li1>Product Details page

        <Li2>Every time the user click a product in the discount list or the recommended list, she is directed to the detail page of that product, which shows not only product details but also shops related to the product.</Li2>

        <Li2>To make this works, Redux provides not only product details but also shops related to the product.</Li2>

        <Li2>When a user who has logged in clicks one of the two "Buy Now" buttons, she is directed to the Purchase page.</Li2>

        <Li2>When a user who has <u>not</u> logged in clicks one of the two "Buy Now" buttons, she is redirected to the Login page.</Li2>
        <img src={productDetails1} alt="productDetails1" />
        <img src={productDetails2} alt="productDetails2" />
      </Li1><br />

      <Li1>Search page

        <Li2>When the user clicks the search bar at the top of the Home page, she is directed to the Search page.</Li2>

        <Li2>When she enters something into the input box, a related search keyword list occurs for her reference. </Li2>

        <Li2>When she clickes the little corss icon at the end of the input box, she clears her input and the related keyword list disappears.</Li2>

        <Li2>When she clicks the cancel button, she goes back to the Home page.</Li2>

        <Li2>When she clicks the keyword either in the related search keyword list or the popular search keyword list, the keyword is added to the search history list, and she is directed to the search result page.</Li2>

        <Li2>The user may clear all search results by clicking the "Clear History" button.</Li2>
        <img src={search1} alt="search1" />
        <img src={search2} alt="search2" />
      </Li1><br />

      <Li1>Search Results page

        <Li2>On the search results page, the user sees shops related to the keyword she has just clicked.</Li2>
        <img src={searchResults} alt="searchResults" />
      </Li1><br />

      <Li1>Login page

        <Li2>When the user clickes the account icon at the top-right corner of the Home page, she is either directed to the UserCentre page if she has logged in or redirected to the Login page if she has not logged in.
        </Li2>

        <Li2>Building a PrivateRoute component can make this happen.</Li2>

        <Li2>When the user has inputed a random number and a password, she can login. And the number and login status are stored by localStorage.</Li2>

        <img src={login} alt="login" />
      </Li1><br />

      <Li1>Purchase page
        <Li2>When the user clicks one of the two "Buy" buttons on the ProductDetails page, she is directed to the Purchase page.
        </Li2>
        <Li2>When the user has placed orders, a dialog pops out to show the success.</Li2>
        <Li2>When the user clicks the word 'my orders', she is directed to the UserCenter page to view her orders.</Li2>

        <img src={purchase} alt="purchase" />
      </Li1><br />

      <Li1>UserCentre page
        <Li2>The user can see different order list when she clicks the tabs: All, Available, Completed, Refund.</Li2>
        <Li2>The user can delete any order by clicking the "Delete" button.</Li2>
        <Li2>The user can comment an order by clicking the "Comment" button.</Li2>
        <Li2>Only completed orders which have not been commented have a "Comment" button.</Li2>
        <Li2>Every time the user has deleted or commented an order, a dialog pops up to let her know the result.</Li2>
        <Li2>The user can click the home button on the top-left corner to go back to the Home page and the logout button on the top-right corner to log out.</Li2>
        <img src={UserCentre} alt="UserCentre" />
      </Li1><br />

      <Li1>Redux folder structure
        <Li2>The Redux folder consists of the middleware folder, the modules folder, and store.js.</Li2>
        <img src={redux} alt="redux" />

        <Li2>The dataFetching middleware is used to process data fetching actions.</Li2>
        <img src={dataFetching} alt="dataFetching" />
      </Li1><br />

      <Li1>React-Slick
        <Li2>React-Slick is a popular and customizable carousel/slider library for React applications.</Li2>
        <Li2>On the Home page, the category area and the promotion area (marked with the blue boxes in the picture) are made with the help of React-Slick.</Li2>
        <img src={reactSlick} alt="reactSlick" />
      </Li1><br />

      <Li1>Private Route
        <Li2>The Private Route makes sure that only users who have logged in can visit the Purchase page and the User Centre page.</Li2>
      </Li1><br />

      <Li1>Reslect
        <Li2>ordersSelector gets the order data displayed on the User Centre page.</Li2>
        <Li2>As long as the two input selectors (tabIndexSelector and getAllOrdersSelector) don't change, ordersSelector would not make any recomputation, which improves the app performance.</Li2>
        <img src={reselect} alt="reselect" />
      </Li1><br />

      <Li1>Dynamic imports and route-centric code splitting
        <Li2>All pages are dynamically imported and the code is split based on routes.</Li2>
        <Li2>The function asyncComponent() makes this happen. It takes the dynamic importing function as its argument and returns a React class component once the component is loaded.</Li2>
        <img src={dynamicImports1} alt="dynamicImports1" />
        <img src={dynamicImports2} alt="dynamicImports2" />
      </Li1><br />
    </>
  )
}
