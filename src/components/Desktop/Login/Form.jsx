import React from 'react';
import FormHeader from './FormHeader';
import LoginForm from './LoginForm';
import FormFooter from './FormFooter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => (
    <div className="min-h-screen flex items-center justify-center flex-auto font-RedHatRegular bg-grayBroobe relative">
        <FormHeader />
        <div className='w-[25%] bg-purpleBroobe shadow-md flex items-center justify-center flex-col h-[40vh] rounded-l-lg'>
            <img src="/images/logo-broobe.svg" alt="Logo Broobe" className="w-40 h-40" />
            <h3 className='text-white text-lg font-RedHatBold'>Desafío Técnico - Agustín Araneo</h3>
        </div>
        <div className="w-[25%] p-4 bg-white shadow-md relative h-[40vh] rounded-r-lg">
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
