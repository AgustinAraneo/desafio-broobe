import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    return (
        <div>
            <p>¿Estás seguro de que deseas eliminar este Issue?</p>
            <button onClick={onConfirm}>Sí, eliminar</button>
            <button onClick={onCancel}>Cancelar</button>
        </div>
    );
};

const Issues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteIssueId, setDeleteIssueId] = useState(null);

    useEffect(() => {
        // Función asincrónica para obtener las issues
        const fetchIssues = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    'https://challenge.broobe.net/api/v1/issues',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const issuesData = response.data;
                setIssues(issuesData);
                setLoading(false);
            } catch (error) {
                // Manejo de errores
                if (error.response) {
                    // Si hay una respuesta de error
                    console.error('Error al obtener las issues:', error.response.data);
                } else if (error.request) {
                    // Si la solicitud fue realizada pero no se recibió respuesta
                    console.error('No se recibió respuesta del servidor');
                } else {
                    // Otros errores
                    console.error('Error en la solicitud:', error.message);
                }

                setLoading(false);
            }
        };

        fetchIssues(); // Llama a la función de obtener issues
    }, []); // El segundo parámetro vacío asegura que se ejecute solo una vez al montar el componente

    const handleDeleteClick = (issueId) => {
        setDeleteIssueId(issueId);
    };

    const handleDeleteCancel = () => {
        setDeleteIssueId(null);
    };

    const handleDeleteConfirm = async () => {
        try {
            const token = localStorage.getItem('token');
            setLoading(true);

            const response = await axios.delete(
                `https://challenge.broobe.net/api/v1/issues/${deleteIssueId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Issue eliminado:', response.data);
            // Actualiza la lista de issues después de la eliminación
            setIssues(issues.filter((issue) => issue.id !== deleteIssueId));
        } catch (error) {
            console.error('Error al eliminar el Issue:', error.response.data);
        } finally {
            setLoading(false);
            setDeleteIssueId(null);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Listado de Issues</h1>

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : issues.length > 0 ? (
                <>
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
                                        <button onClick={() => handleDeleteClick(issue.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {deleteIssueId && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-md shadow-md">
                                <DeleteConfirmation
                                    onConfirm={handleDeleteConfirm}
                                    onCancel={handleDeleteCancel}
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p className="text-gray-600">No hay Issues disponibles.</p>
            )}
            <div className="gap-x-4 flex flex-auto">
                <div>
                    <Link href="/CreateIssue">Crear Issues</Link>
                </div>
                <div>
                    <Link href="/UpdateIssue">Actualizar Issues</Link>
                </div>
            </div>
        </div>
    );
};

export default Issues;
