import { useParams, useNavigate } from "react-router-dom";
import { getPetById, deletePetById, updatePetById } from "../services/internalApiService";
import { useEffect, useState } from "react";

export const OnePet = (props) => {
    const [pet, setPet] = useState(null);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() =>{
        getPetById(id)
        .then((data) => {
            console.log(data);
            setPet(data);
        })
        .catch((error) => {
            console.log(error);
            // navigate('/notARoute')
        })
    },[id])
    if(pet === null){
        return null;
    }
    const HandleDeleteCLick = () => {
        deletePetById(id)
        .then((deletedPet) =>{
            navigate('/pets')
        })
        .catch((error) =>{console.log(error)});
    }
    // const HandleLikeCLick = (event) => {
    //     event.preventDefault();
    //     const likedPet = {
    //         likes : pet.likes +1
    //     }
    //     updatePetById(id, likedPet)
    //         .then((data) => {
    //             setPet(data)
    //             setLiked(true)
    //         })
    //     }

    const { name, type, description, skill1, skill2, skill3, likes} = pet;
    

    return (
        <div className="shadow mx-auto shadow rounded border p-4">
        <h4>Name: {name}</h4>
        <h3>Type: {type}</h3>
        <h3>Description: {description}</h3>
        <h4>Skills:</h4>
        <h3>Skill1: {skill1}</h3>
        <h3>Skill2: {skill2}</h3>
        <h3>Skill3: {skill3}</h3>
        {/* <button className='btn btn-sm btn-outline-success' onClick={(e)=>HandleLikeCLick()} disabled={liked}>Like {name}</button> */}
        {/* <p>{likes} like(s)</p> */}
        <button className='btn btn-sm btn-outline-danger' onClick={(e)=>HandleDeleteCLick()}>Adopt A Pet</button>    </div>
);
};

export default OnePet;