import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteIssue = ({ issueId, onDelete }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDeleteIssue = async () => {
        try {
            const token = localStorage.getItem('token');
            setLoading(true);

            const response = await axios.delete(
                `https://challenge.broobe.net/api/v1/issues/${issueId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Issue eliminado:', response.data);
            // Actualiza la lista de issues en el componente principal después de la eliminación
            onDelete();
        } catch (error) {
            console.error('Error al eliminar el Issue:', error.response.data);
            setError('Error al eliminar el Issue. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p>¿Estás seguro de que deseas eliminar este Issue?</p>
            <button
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                onClick={handleDeleteIssue}
                disabled={loading}
            >
                {loading ? 'Eliminando...' : 'Eliminar'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

const IssuesList = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteIssueId, setDeleteIssueId] = useState(null);

    useEffect(() => {
        // Lógica para obtener la lista de issues, similar a tu componente existente
        // ...

        // Ejemplo de setIssues (reemplazar con tu lógica real)
        setIssues([
            { id: 1, name: 'Issue 1', description: 'Description 1', priority_id: 1 },
            { id: 2, name: 'Issue 2', description: 'Description 2', priority_id: 2 },
            // ... más issues
        ]);

        setLoading(false);
    }, []);

    const handleDeleteClick = (issueId) => {
        setDeleteIssueId(issueId);
    };

    const handleDeleteClose = () => {
        setDeleteIssueId(null);
    };

    const handleDeleteSuccess = () => {
        // Actualiza la lista de issues después de la eliminación
        // Puedes llamar a tu lógica para obtener la lista actualizada o modificar el estado directamente
        // En este ejemplo, solo limpiamos el deleteIssueId para cerrar el componente de eliminación
        setDeleteIssueId(null);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Listado de Issues</h1>

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : issues.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">ID</th>
                            <th className="py-2 px-4 border">Nombre</th>
                            <th className="py-2 px-4 border">Descripción</th>
                            <th className="py-2 px-4 border">Prioridad ID</th>
                            <th className="py-2 px-4 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue) => (
                            <tr key={issue.id}>
                                <td className="py-2 px-4 border">{issue.id}</td>
                                <td className="py-2 px-4 border">{issue.name}</td>
                                <td className="py-2 px-4 border">{issue.description}</td>
                                <td className="py-2 px-4 border">{issue.priority_id}</td>
                                <td className="py-2 px-4 border">
                                    <button
                                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                                        onClick={() => handleDeleteClick(issue.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-600">No hay Issues disponibles.</p>
            )}

            {deleteIssueId && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <DeleteIssue issueId={deleteIssueId} onDelete={handleDeleteSuccess} />
                        <button
                            className="absolute top-0 right-0 m-4 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                            onClick={handleDeleteClose}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IssuesList;
