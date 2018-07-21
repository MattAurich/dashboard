class SectionApi {
  static getAllSections() {
    return fetch('http://localhost:1337/section')
      .then(response => response.json())
      .catch(error => error);
  }

  static updateSection(section) {
    const request = new Request(`http://localhost:1337/section/${section.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(section),
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static createSection(section) {
    const request = new Request('http://localhost:1337/section/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(section),
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static deleteSection(section) {
    const request = new Request(`http://localhost:1337/section/${section.id}`, {
      method: 'DELETE',
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default SectionApi;
