class SectionApi {
  static getAllSections() {
    return fetch('http://localhost:1337/section')
      .then(response => response.json())
      .catch(error => error);
  }
}

export default SectionApi;
