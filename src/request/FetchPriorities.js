import axios from 'axios';

export const fetchPriorities = async (token) => {
    try {
        const response = await axios.get('https://challenge.broobe.net/api/v1/priorities', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener las prioridades:', error.response.data);
        throw new Error('Error al obtener las prioridades.');
    }
};
