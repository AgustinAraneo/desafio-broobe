import axios from 'axios';

export const updateIssue = async (token, issueId, priorityId) => {
    try {
        const response = await axios.patch(
            `https://challenge.broobe.net/api/v1/issues/${issueId}`,
            {
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
        console.error('Error al actualizar el Issue:', error.response.data);
        throw new Error('Error al actualizar el Issue. Verifica los datos ingresados.');
    }
};
