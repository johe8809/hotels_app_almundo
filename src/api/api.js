export default () => {
    return fetch('http://192.168.0.15:3000/api/hotels')
        .then(response => Promise.all([response, response.json()]));        
}