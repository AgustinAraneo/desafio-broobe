import React from 'react';

const UpdateForm = ({
    issueId,
    priorityId,
    priorities,
    handleUpdate,
    setIssueId,
    setPriorityId,
}) => (
    <div className="max-w-lg mx-auto mt-8 font-RedHatMedium">
        <form className="">
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">ID de la Issue:</label>
                <input
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    placeholder="Ej. 426"
                    value={issueId}
                    onChange={(e) => setIssueId(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nueva Prioridad:</label>
                <select
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
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
            <div className='flex justify-center'>
                <button
                    className="bg-purpleBroobe text-white hover:bg-[#3b399c] transition-all px-2 py-2 rounded text-xl font-RedHatBold"
                    type="button"
                    onClick={handleUpdate}
                >
                    Actualizar Issue
                </button>
            </div>
        </form>
    </div>
);

export default UpdateForm;
