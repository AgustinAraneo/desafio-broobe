import React, { useState, useEffect } from 'react';
import { fetchPriorities } from '@/request/FetchPriorities';
import UpdateForm from '@/components/Desktop/Update Issue/UpdateForm';
import Navbar from '@/components/Desktop/Ui/Navbar';
import ButtonPurple from '@/components/Desktop/Ui/ButtonPurple';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateIssue } from '@/request/UpdateIssue';

const UpdateIssueMain = () => {
    const [issueId, setIssueId] = useState('');
    const [priorityId, setPriorityId] = useState('');
    const [priorities, setPriorities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const prioritiesData = await fetchPriorities(token);
                setPriorities(prioritiesData);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las prioridades:', error.message);
                setError('Error al obtener las prioridades.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const notifySuccess = () => toast.success('Issue actualizado correctamente');

    const handleUpdateClick = async () => {
        try {
            const updatedData = await updateIssue(localStorage.getItem('token'), issueId, priorityId);
            notifySuccess();
        } catch (error) {
            console.error('Update error:', error);
            setError(error.message);
            toast.error(`Error al actualizar el issue`);
        }
    };

    return (
        <div className='bg-grayBroobe min-h-screen'>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-semibold mb-6 text-center font-RedHatBold text-purpleBroobe underline underline-offset-4">Actualizar un Issue</h1>

                {loading ? (
                    <p className="text-gray-600">Cargando...</p>
                ) : (
                    <div>
                        <UpdateForm
                            issueId={issueId}
                            priorityId={priorityId}
                            priorities={priorities}
                            handleUpdate={handleUpdateClick}
                            setIssueId={setIssueId}
                            setPriorityId={setPriorityId}
                        />
                    </div>
                )}
                <ButtonPurple href={"/Issues"} text={"Volver"} />
            </div>
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
    );
};

export default UpdateIssueMain;
