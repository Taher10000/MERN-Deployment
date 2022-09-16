import {Link} from 'react-router-dom';

export const NotFound = (props) => {
    return (
        <div>
        <p>Page not found</p>
        <p>We're sorry, but we could not find the pet you are looking for. Would you like to add this pet to our database?</p>
        <Link
    to ='/pets/new'
    className='btn btn-sm btn-outline-info mx-1' 
    >
    Add Pet
    </Link>
        </div>
    );
    
}

export default NotFound;