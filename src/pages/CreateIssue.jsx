'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'

const CreateIssue = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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

    const handleCreateIssue = async () => {
        try {
            const token = localStorage.getItem('token');
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
            console.log('Issue creado:', response.data);
            // Aquí podrías redirigir al usuario a la pantalla de listado de issues o realizar otras acciones necesarias.
        } catch (error) {
            console.error('Error al crear el Issue:', error.response.data);
            setError('Error al crear el Issue. Verifica los datos ingresados.');
        }
    };

    console.log('nombre prioridad: ', priorities)

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Crear un Issue</h1>

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : (
                <div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                            <input
                                className="w-full border p-2 rounded-md"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                            <textarea
                                className="w-full border p-2 rounded-md"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Prioridad:</label>
                            <select
                                className="w-full border p-2 rounded-md"  // Añadir la clase text-red-500 para cambiar el color del texto a rojo
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
                            onClick={handleCreateIssue}
                        >
                            Crear Issue
                        </button>
                    </form>
                    <Link href="/Issues">Volver</Link>
                </div>
            )}
        </div>
    );
};

export default CreateIssue;
