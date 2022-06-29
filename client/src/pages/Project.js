import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../components/queries/projectQueries';

function Project() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT,
        { variables: { id } })
    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>;
    return (
        <>
            {!loading && !error && (<div class="card text-center">
                {/* <div class="card-header">
                    {data.project.name}
                </div> */}
                <div class="card-body">
                    <h5 class="card-title">{data.project.name}</h5>
                    <p class="card-text">{data.project.description}</p>
                    <Link to="/" class="btn btn-primary">Go Back</Link>
                </div>
                <div class="card-footer text-muted">
                    <h5>Client details</h5>
                    
                    Name: {data.project.client.name} <br />
                    Phone: {data.project.client.phone} <br />
                    Email: {data.project.client.email} 
                </div>
            </div>)}
        </>
    )
}

export default Project