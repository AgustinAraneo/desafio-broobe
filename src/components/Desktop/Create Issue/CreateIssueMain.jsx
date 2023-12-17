import React, { useState, useEffect } from 'react';
import { loadPrioritiesAndCreateIssue, handleCreateIssue } from '@/components/Desktop/Create Issue/CreteIssueFunctions';
import CreateForm from '@/components/Desktop/Create Issue/CreateForm';
import Navbar from '../Ui/Navbar';
import ButtonPurple from '../Ui/ButtonPurple';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateIssueMain = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priorityId, setPriorityId] = useState('');
    const [priorities, setPriorities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPrioritiesAndCreateIssue(setPriorities, setLoading);
    }, []);

    const handleCreateIssueLocal = async () => {
        try {
            const token = localStorage.getItem('token');
            await handleCreateIssue(token, name, description, priorityId);
            notifySuccess('Issue creado correctamente');
        } catch (error) {
            notifyError(`Error al crear el issue`);
        }
    };

    const notifySuccess = (message) => toast.success(message);
    const notifyError = (errorMessage) => toast.error(errorMessage);

    return (
        <div className='bg-grayBroobe min-h-screen'>
            <Navbar />
            <div className="container mx-auto mt-8 font-RedHatMedium">
                <h1 className="text-3xl font-semibold mb-6 text-center font-RedHatBold text-purpleBroobe underline underline-offset-4">Crear un Issue</h1>

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
                            handleCreateIssueLocal={handleCreateIssueLocal}
                        />
                        <ButtonPurple href={"/Issues"} text={"Volver"} />
                        <ToastContainer
                            draggablePercent={60}
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateIssueMain;
