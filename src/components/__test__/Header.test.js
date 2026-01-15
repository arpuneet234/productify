import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter, staticRouter } from "react-router-dom/server";

test("Logo shoud load when rendring header ", () => {
  //load Header
  //check if logo is loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe(
    "https://www.logoai.com/uploads/output/2022/01/16/844f6937a6cbf4a3082e133e72f5cf39.jpg"
  );
});

test("Cart Should Have zero Items  ", () => {
  //load Header
  //check if logo is loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  console.log(cart);

  expect(cart.innerHTML).toBe('<a href="/cart">Cart - 0 Items</a>');
});
