'use client'
import React from 'react'
import ButtonWhite from '../Ui/ButtonWhite'
import Introduccion from './Introduccion'

const Home = () => {
    return (
        <div className='bg-purpleBroobe min-h-screen font-RedHatRegular'>
            <h1 className='text-4xl text-white underline-offset-4 text-center underline font-bold'>Desafio Tecnico Broobe - Agustín Araneo</h1>
            <div className='flex justify-center'>
                <ButtonWhite href="/Login" text="¡Empieza ahora!" />
            </div>
            <div>
                <Introduccion />
            </div>
        </div>
    )
}

export default Home