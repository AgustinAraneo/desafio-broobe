import { fetchPriorities } from '@/request/FetchPriorities';
import { createIssue } from '@/request/CreateIssue';

export const loadPrioritiesAndCreateIssue = async (setPriorities, setLoading, setError) => {
    try {
        const token = localStorage.getItem('token');
        const prioritiesData = await fetchPriorities(token);
        setPriorities(prioritiesData);
        setLoading(false);
    } catch (error) {
        setError(error.message);
        setLoading(false);
    }
};

export const handleCreateIssue = async (token, name, description, priorityId, setError) => {
    try {
        await createIssue(token, name, description, priorityId);
    } catch (error) {
        setError(error.message);
    }
};
