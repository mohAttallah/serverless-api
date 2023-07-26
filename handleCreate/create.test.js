const axios = require('axios');


describe('Router handler for getUsers', () => {

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'aws'
    };
    const postData = {
        id: 10,
        name: 'mohammad',
        age: 30
    };
    // Make the POST request
    const url = 'https://zzg6rnvpf4.execute-api.us-east-1.amazonaws.com/people'



    test('Should fetch users and send user objects in the response', async () => {
        const res = axios.post(url, postData, { headers })
        expect(res.status).toBe(201);
    });

});




