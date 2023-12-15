import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'

const UpdateIssue = () => {
    const [issueId, setIssueId] = useState('');  // Necesitarás obtener el ID de la issue que deseas actualizar
    const [priorityId, setPriorityId] = useState('');
    const [priorities, setPriorities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función asincrónica para obtener las prioridades
        const fetchPriorities = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(
                    'https://challenge.broobe.net/api/v1/priorities',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const prioritiesData = response.data;
                setPriorities(prioritiesData);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las prioridades:', error.response.data);
                setLoading(false);
                setError('Error al obtener las prioridades.');
            }
        };

        fetchPriorities(); // Llama a la función de obtener prioridades
    }, []);

    const handleUpdateIssue = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(
                `https://challenge.broobe.net/api/v1/issues/${issueId}`,  // Asegúrate de tener el ID correcto aquí
                {
                    priority_id: priorityId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Issue actualizado:', response.data);
            // Puedes realizar acciones adicionales aquí, como redirigir al usuario o actualizar la lista de issues, según sea necesario.
        } catch (error) {
            console.error('Error al actualizar el Issue:', error.response.data);
            setError('Error al actualizar el Issue. Verifica los datos ingresados.');
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Actualizar un Issue</h1>

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : (
                <div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">ID de la Issue:</label>
                            <input
                                className="w-full border p-2 rounded-md"
                                type="text"
                                value={issueId}
                                onChange={(e) => setIssueId(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nueva Prioridad:</label>
                            <select
                                className="w-full border p-2 rounded-md"
                                value={priorityId}
                                onChange={(e) => setPriorityId(e.target.value)}
                            >
                                <option value="">Seleccione una prioridad</option>
                                {priorities.map((priority) => (
                                    <option key={priority.id} value={priority.id}>
                                        {priority.type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        <button
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            type="button"
                            onClick={handleUpdateIssue}
                        >
                            Actualizar Issue
                        </button>
                    </form>
                    <Link href="/Issues">Volver</Link>
                </div>
            )}
        </div>
    );
};

export default UpdateIssue;
