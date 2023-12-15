'use client'
import React from 'react'
import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-900 underline-offset-4 text-center underline font-bold'>Desafio Tecnico Broobe - Agustín Araneo</h1>
            <div>
                <Link href="/Login">
                    <button className='bg-blue-900 text-white'>Comenzar</button>
                </Link>
            </div>
        </div>
    )
}

export default Home