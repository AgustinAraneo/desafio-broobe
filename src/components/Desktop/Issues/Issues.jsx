'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Desktop/Ui/Navbar';
import DeleteModal from '@/components/Desktop/Issues/DeleteModal';
import ApiService from '@/request/Issues';
import IssuesList from '@/components/Desktop/Issues/IssuesList';
import ButtonPink from '../Ui/ButtonPink';

const IssuesMain = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteIssueId, setDeleteIssueId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const apiService = new ApiService(token);

        const fetchIssues = async () => {
            try {
                const issuesData = await apiService.getIssues();
                setIssues(issuesData);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las issues:', error);
                setLoading(false);
            }
        };

        fetchIssues();
    }, []);


    const handleDeleteClick = (issueId) => {
        setDeleteIssueId(issueId);
    };

    const handleDeleteCancel = () => {
        setDeleteIssueId(null);
    };

    const handleDeleteConfirm = async () => {
        try {
            const apiService = new ApiService(localStorage.getItem('token'));
            setLoading(true);

            const deletedIssue = await apiService.deleteIssue(deleteIssueId);
            console.log('Issue eliminado:', deletedIssue);

            setIssues(issues.filter((issue) => issue.id !== deleteIssueId));
        } catch (error) {
            console.error('Error al eliminar el Issue:', error);
        } finally {
            setLoading(false);
            setDeleteIssueId(null);
        }
    };

    return (
        <div className='bg-grayBroobe min-h-screen'>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-RedHatBold text-purpleBroobe text-center mb-6 underline underline-offset-2">Listado de Issues</h1>

                {loading ? (
                    <p className="text-gray-600">Cargando...</p>
                ) : issues.length > 0 ? (
                    <>
                        <IssuesList issues={issues} handleDeleteClick={handleDeleteClick} />
                        {deleteIssueId && (
                            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-4 rounded-md shadow-md">
                                    <DeleteModal
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

                <div className="gap-x-4 flex flex-auto justify-center mt-10">
                    <div>
                        <ButtonPink href={"/CreateIssue"} text={"Crear Issues"} />
                    </div>
                    <div>
                        <ButtonPink href={"/UpdateIssue"} text={"Actualizar Issues"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuesMain;
