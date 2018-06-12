class PageApi {
  static getAllPages() {
    return fetch('http://localhost:1337/page').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export { PageApi as default}
