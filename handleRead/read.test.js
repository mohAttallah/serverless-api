describe('Router handler for getUsers', () => {
    const axios = require('axios');


    test('Should fetch users and send user objects in the response', async () => {
        const res = await axios.get('https://zzg6rnvpf4.execute-api.us-east-1.amazonaws.com/people');

        expect(res.status).toBe(200);
    });

});
