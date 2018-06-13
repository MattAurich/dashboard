class SectionApi {  
  static getAllSections() {
    return fetch('http://localhost:1337/section').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
};

export default SectionApi;
