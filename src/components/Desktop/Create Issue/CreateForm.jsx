import React from 'react';

const CreateForm = ({
    name,
    setName,
    description,
    setDescription,
    priorityId,
    setPriorityId,
    priorities,
    error,
    handleCreateIssueLocal
}) => {
    return (
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
                onClick={handleCreateIssueLocal}
            >
                Crear Issue
            </button>
        </form>
    );
};

export default CreateForm;
