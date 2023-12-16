export const getPriorityStyles = (priorityId) => {
    switch (priorityId) {
        case 1:
            return 'text-blue-500';
        case 2:
            return 'text-green-500';
        case 3:
            return 'text-yellow-500';
        case 4:
            return 'text-red-500';
        default:
            return 'text-gray-500';
    }
};

export const getPriorityLabel = (priorityId) => {
    switch (priorityId) {
        case 1:
            return 'To do';
        case 2:
            return 'Backlog';
        case 3:
            return 'Review';
        case 4:
            return 'In progress';
        default:
            return 'Unknown Priority';
    }
};