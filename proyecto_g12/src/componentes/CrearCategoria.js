import React, {useState}  from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate} from 'react-router-dom';
import crud from '../conexiones/crud';
import swal from 'sweetalert';


const CrearCategoria = () => {

    const navigate = useNavigate();

    const [categoria, setCategoria]= useState({
      nombre:'',
      imagen:''



    });
  
    const {nombre, imagen} = categoria;
  
    const onChange =(e) => {
      setCategoria({
        ...categoria,
        [e.target.name]:e.target.value
      })
    };

    const ingresarCategoria = async() => {

        const data ={
          nombre: categoria.nombre,
          imagen: categoria.imagen
        }
        //console.log(data);
        const response = await crud.POST(`/api/categorias`,data);
        const mensaje = response.msg;
        //console.log(mensaje);
        const mensaje1 = "La categoria se creo correctamente";
        swal({
            title: 'Informacion',
            text: mensaje1,
            icon: 'success',
            buttons: {
              confirm: {
                text: 'OK',
                value: true,
                visible: true,
                clasName: 'btn btn-primary',
                closeModal: true
  
              }
            }
          });
          //redireccionar a la pagina de admin 
            navigate("/admin");
        
    };
    const onSubmit =(e)=>{
      e.preventDefault();
      ingresarCategoria();
    
    }

    return (
        <>
            <Header />
            <div className="md:flex md:min-h-screen">
                <Sidebar />
                <main className="flex-1">
                    <div className="mt-5 flex justify-center">
                        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">Creacion de categorias</h1>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <form
                            onSubmit={onSubmit}
                            className="my-10 bg-white shadow rounded-lg p-10"
                        >
                            <div className="my-5">
                                <label className="uppercase text-gray-600 block text-lx font-bold">Nombre de la Categoria</label>
                                <input
                                    type="nombre"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre de la Categoria "
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-400"
                                    value={nombre}
                                    onChange={onChange}
                                ></input>
                                <label className="uppercase text-gray-600 block text-lx font-bold">Imagen de la Categoria</label>
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    placeholder="Imagen"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-400"
                                    value={imagen}
                                    onChange={onChange}
                                ></input>

                                <input
                                    type="submit"
                                    value="Crear Categoria "
                                    className=" my-5 bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-400 transition-colors"
                                />


                            </div>
                        </form>

                    </div>
                </main>
            </div>


        </>


    );

}

export default CrearCategoria;