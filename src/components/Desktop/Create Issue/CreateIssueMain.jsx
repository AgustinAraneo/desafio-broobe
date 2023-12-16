import React, { useState, useEffect } from 'react';
import { loadPrioritiesAndCreateIssue, handleCreateIssue } from '@/components/Desktop/Create Issue/CreteIssueFunctions';
import Link from 'next/link'
import CreateForm from '@/components/Desktop/Create Issue/CreateForm';

const CreateIssueMain = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priorityId, setPriorityId] = useState('');
    const [priorities, setPriorities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPrioritiesAndCreateIssue(setPriorities, setLoading, setError);
    }, []);

    const handleCreateIssueLocal = () => {
        handleCreateIssue(localStorage.getItem('token'), name, description, priorityId, setError);
    };


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-6">Crear un Issue</h1>

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : (
                <div>
                    <CreateForm
                        name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription}
                        priorityId={priorityId}
                        setPriorityId={setPriorityId}
                        priorities={priorities}
                        error={error}
                        handleCreateIssueLocal={handleCreateIssueLocal} />
                    <Link href="/Issues">Volver</Link>
                </div>
            )}
        </div>
    );
};

export default CreateIssueMain;
