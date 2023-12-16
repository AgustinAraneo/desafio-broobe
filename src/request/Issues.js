import axios from 'axios';

class ApiService {
    constructor(token) {
        this.token = token;
        this.apiUrl = 'https://challenge.broobe.net/api/v1';
    }

    async getIssues() {
        try {
            const response = await axios.get(`${this.apiUrl}/issues`, {
                headers: { Authorization: `Bearer ${this.token}` },
            });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }

    async deleteIssue(issueId) {
        try {
            const response = await axios.delete(`${this.apiUrl}/issues/${issueId}`, {
                headers: { Authorization: `Bearer ${this.token}` },
            });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
}

export default ApiService;
