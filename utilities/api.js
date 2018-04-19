const api = {
  nasaPics(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=3W8Zx6ukRY45n794OlK3azgYNdoZd42D0d98cvPB'
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api