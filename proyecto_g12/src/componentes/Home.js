import React, { useState }  from "react";
import {createRoutesFromChildren, Link} from 'react-router-dom';

const Home = () => {



    return (
      <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
      <div className='md:w-2/3 lg:w-2/5'>
      <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">Home</h1>
     
    <Link
    className="block text-center my-5 text-sky-300"
    to={"/login"}
    >Iniciar Sesion
    </Link>
      </div>
      </main>

    );
}

export default Home;