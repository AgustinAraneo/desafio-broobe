import React from 'react';
import FormHeader from './FormHeader';
import LoginForm from '@/components/Desktop/Login/LoginForm';
import FormFooter from './FormFooter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => (
    <div className="min-h-screen flex items-center justify-center flex-auto font-RedHatRegular bg-grayBroobe relative">
        <FormHeader />
        <div className="w-[90%] py-20 p-4 bg-white shadow-md relative rounded-r-lg">
            <LoginForm />
            <FormFooter />
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

export default Form;
