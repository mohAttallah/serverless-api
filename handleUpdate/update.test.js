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

    const url = 'https://zzg6rnvpf4.execute-api.us-east-1.amazonaws.com/people/10'



    test('Should update the data and return the id', async () => {
        const res = axios.put(url, postData, { headers })
        expect(res.status).toBe(203);
    });

});



