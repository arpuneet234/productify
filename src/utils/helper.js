export function filter(searchText, allProducts) {
  let filteredListd = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredListd;
}
