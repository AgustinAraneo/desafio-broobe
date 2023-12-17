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
    success,
    handleCreateIssueLocal
}) => {
    return (
        <div>
            <form className="max-w-lg mx-auto mt-8">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Nombre del Issue"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                    <textarea
                        className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Ej. Descripción del Issue"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Prioridad:</label>
                    <select
                        className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
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
                {success && <p className="text-green-500 mb-4">Issue creado correctamente</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className='flex flex-auto justify-center'>
                    <button
                        className="bg-purpleBroobe text-white hover:bg-[#3b399c] transition-all px-2 py-2 rounded text-xl font-RedHatBold"
                        type="button"
                        onClick={handleCreateIssueLocal}
                    >
                        Crear Issue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
