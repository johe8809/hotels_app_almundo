export default () => {
    return fetch('http://172.20.10.2:3000/api/hotels')
        .then(response => Promise.all([response, response.json()]));        
}