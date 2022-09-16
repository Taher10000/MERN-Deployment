import { getAllPets} from '../services/internalApiService'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const AllPets = (props) => {
    const [pets, setPets] = useState([]);
    useEffect(() =>{
        getAllPets()
        .then((data) => {
            console.log(data);
            setPets(data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
    
        <div className='w-5- mx-auto text-center'>
            {
                pets.sort((a,b) =>{
                    if(a.type < b.type) {return -1;}
                    if(a.type > b.type) {return 1;}
                    return 0;
                })
        .map((pet) =>{
            const {_id, name, type} = pet;
            return <div key={_id} className="shadow mb-4 rounded border p-4">
                <h4>Name: {name}</h4>
                <p>Type: {type}</p>
                
                <div>
                    <Link to={`/pets/${_id}`} className='btn btn-sm btn-outline-info' >
                    Details
                    </Link>
                    <Link to={`/pets/${_id}/edit`} className='btn btn-sm btn-outline-info' >
                    Edit
                    </Link>
                </div>
            </div>
        })}

    </div>
    );
        
}



export default AllPets;