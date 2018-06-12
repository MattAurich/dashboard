class BrandyApi {
  static getAllBrandies() {
    return fetch('http://localhost:1337/brandy').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export { BrandyApi as default}
