const axios = require('axios');


describe('Delete people', () => {

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'aws'
    };
    const url = 'https://zzg6rnvpf4.execute-api.us-east-1.amazonaws.com/people/6'

    test('Should delete the data have the same id ', async () => {
        const res = axios.delete(url,{ headers })
        expect(res.status).toBe(204);
    });

});



