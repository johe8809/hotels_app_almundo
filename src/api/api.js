export default () => {
    return fetch('http://192.168.54.21:3000/api/hotels')
        .then(response => Promise.all([response, response.json()]));        
}