//FETCHING ALL THE PRODUCTS
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({data});
  }
  );
}

//FETCHING PRODUCTS BASED ON CATEGORY AND BRAND
export function fetchProductsByFilter(filter) {
  //filter : {category: "smartphones"}
  let queryString = ''; //string which attached in front of ?

  for(let key in filter) {
    queryString += `${key}=${filter[key]}&`
    console.log(queryString)
  }
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products?" + queryString );
    const data = await response.json();
    resolve({data});
  }
  );
}
