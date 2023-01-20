import  { useEffect, useState } from 'react'
import axios from 'axios' //npm i axios

//components
import Card from '../components/Card'

//variable de entorno
const baseURL = process.env.REACT_APP_API_URL //npm i dotenv

function Home() {

const [ listPersona, setListPersona ] = useState([])

  useEffect(() => {
    getPersonas() 
  },[])

 const getPersonas = async() => {
    const { data } = await axios.get(baseURL)
    setListPersona(data)
    console.log(data)
 } 

 const savePersona = () =>{ }

    return (
        <div className="p-3">
            <div className="row justify-content-left">
                <div className="col-md-4">
                    <div className="card p-2 mb-2">
                        <input type="text"
                               placeholder="Tipo Documento"
                               className="form-control mt-2"
                        />

                        <input type="text"
                               placeholder="Documento"
                               className="form-control mt-2"
                        />
                        <input type="text"
                               placeholder="Nombre"
                               className="form-control mt-2"
                        />
                        <input type="text"
                               placeholder="Apellido"
                               className="form-control mt-2"
                        />
                        <input type="text"
                               placeholder="Hobbie"
                               className="form-control mt-2"
                        />
                       
                        <button className="btn btn-primary mt-2 mb-2"
                                onClick={savePersona}>
                            Guardar 
                        </button>
                        
                                           
                    </div>
                </div>
                 
              <div className="col-md-8 ">
              <div className="row ">
              { listPersona.map(persona => (
                 <div className="col-md-6 mb-2" key={persona.id}>
                      <Card 
                          tipo_doc={persona.tipo_doc}
                          documento={persona.documento}  
                          nombre={persona.nombre}
                          apellido={persona.apellido} 
                          hobbie={persona.hobbie} 
                          
                        />
                </div>              
              ))}   
                </div>                          
              </div>   
            </div>
        </div>
    );
}

export default Home;

