import axios from 'axios';

export const createIssue = async (token, name, description, priorityId) => {
    try {
        const response = await axios.post(
            'https://challenge.broobe.net/api/v1/issues',
            {
                name,
                description,
                priority_id: priorityId,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error al crear el Issue:', error.response.data);
        throw new Error('Error al crear el Issue. Verifica los datos ingresados.');
    }
};
