class PageApi {
  static getAllPages() {
    return fetch('http://localhost:1337/page')
      .then(response => response.json())
      .catch(error => error);
  }

  static updatePage(page) {
    const request = new Request(`http://localhost:1337/page/${page.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(page),
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export { PageApi as default };
