import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Product_Data } from "../../mocks/Product_Data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({ Product_Data });
    },
  });
});

test("Shimmer should load on HomePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);

  expect(shimmer).toBeInTheDocument();
});
