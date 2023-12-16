import { motion, AnimatePresence } from 'framer-motion';

const DeleteModal = ({ onConfirm, onCancel }) => {
    return (
        <AnimatePresence>
            <motion.div
                key="modal-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center"
            >
                <motion.div
                    key="modal-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-purpleBroobe p-4 rounded-md shadow-md w-[30%] h-auto text-white font-RedHatMedium"
                >
                    <p className='text-xl text-center mt-4 '>¿Estás seguro de que deseas eliminar este Issue?</p>
                    <div className="my-4 flex justify-center space-x-4">
                        <button
                            onClick={onConfirm}
                            className="bg-white text-pinkBroobe hover:text-white hover:bg-pinkBroobe px-4 py-2 rounded transition-all"
                        >
                            Sí, eliminar
                        </button>
                        <button
                            onClick={onCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all"
                        >
                            Cancelar
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DeleteModal;
