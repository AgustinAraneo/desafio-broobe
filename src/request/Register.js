import axios from 'axios';

class Register {
    async registerUser(name, email, password) {
        try {
            const response = await axios.post(
                'https://challenge.broobe.net/api/v1/users',
                { name, email, password }
            );

            const userData = response.data[0];
            return userData;
        } catch (err) {
            throw err.response.data;
        }
    }
}

export default Register;
