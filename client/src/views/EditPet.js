import { useParams, useNavigate } from "react-router-dom";
import{useState, useEffect} from "react";
import { getPetById, updatePetById } from "../services/internalApiService";



export const EditPet = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() =>{
        getPetById(id)
        .then((data) => {
            const {name,type,
                description,
                skill1,
                skill2,
                skill3,} = data;
                setName(name);
                setType(type);
                setDescription(description);
                setSkill1(skill1);
                setSkill2(skill2);
                setSkill3(skill3);

        })
        .catch((error) => {
            console.log(error);
            // navigate('/NotARoute')
        })
    },[id]);

    const HandleUpdatePetSubmit = (event) =>{
        event.preventDefault();
        const updatedPet = {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        };
        updatePetById(id,updatedPet)
            .then((updatedPet) =>{
            console.log("updated pet:",updatedPet);
            navigate(`/pets/${id}`);
            })
            .catch((error) =>{ 
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
        
        
        
    };



    return <div className="w-50 p-4 rounded mx-auto shadow">
    <form onSubmit={(e) => HandleUpdatePetSubmit(e)}>
        <div className="form-group">
            <label className="h-7">Name:</label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
            {
                    errors?.name && <span style={{color:'red'}}>{errors?.name?.message}</span>
                }
        </div>
        <div className="form-group">
                <label className="h-7">Type</label><br />
                <input type="text" onChange={(e) => setType(e.target.value)} value={type} className="form-control" />
                {
                    errors?.type && <span style={{color:'red'}}>{errors?.type?.message}</span>
                }
            </div>
            <div className="form-group">
                <label className="h-7">Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
                {
                    errors?.description && <span style={{color:'red'}}>{errors?.description?.message}</span>
                }
            </div>
            <p>Skills:</p>
        
            <div className="form-group">
                <label className="h-7">Skill1:</label><br />
                <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} className="form-control" />
                {
                    errors?.skill1 && <span style={{color:'red'}}>{errors?.skill1?.message}</span>
                }
            </div>
            <div className="form-group">
                <label className="h-7">Skill2</label><br />
                <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} className="form-control" />
                {
                    errors?.skill2 && <span style={{color:'red'}}>{errors?.skill2?.message}</span>
                }
            </div>
            <div className="form-group">
                <label className="h-7">Skill3:</label><br />
                <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} className="form-control" />
                {
                    errors?.skill3 && <span style={{color:'red'}}>{errors?.skill3?.message}</span>
                }
            </div>

        <button className='btn btn-sm btn-outline-danger'>Edit</button>

    </form>

</div>;



}

export default EditPet;