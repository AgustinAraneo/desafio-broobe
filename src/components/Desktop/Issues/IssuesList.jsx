import React from 'react';
import { getPriorityLabel, getPriorityStyles } from './IssuesCase';

const IssuesList = ({ issues, handleDeleteClick }) => {
    return (
        <div className="overflow-x-auto font-RedHatMedium shadow-lg rounded">
            <table className="min-w-full text-white">
                <thead className="bg-purpleBroobe font-RedHatBold">
                    <tr className='text-left'>
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Nombre</th>
                        <th className="py-2 px-4">Descripción</th>
                        <th className="py-2 px-4">Prioridad</th>
                        <th className=''></th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {issues.map((issue, index) => (
                        <tr key={issue.id} className={index % 2 === 0 ? 'bg-grayBroobe' : 'bg-white'}>
                            <td className="py-2 px-4">{issue.id}</td>
                            <td className="py-2 px-4 break-all max-w-[3rem]">{issue.name}</td>
                            <td className="py-2 px-2 break-all max-w-xs">{issue.description}</td>
                            <td className={`py-2 px-4 font-RedHatBold ${getPriorityStyles(issue.priority_id)}`}>
                                {getPriorityLabel(issue.priority_id)}
                            </td>
                            <td className='py-2 px-4 w-20'>
                                <button
                                    onClick={() => handleDeleteClick(issue.id)}
                                    className="bg-red-500 hover:bg-red-700 transition-all rounded-full text-white px-2 py-1 cursor-pointer"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssuesList;