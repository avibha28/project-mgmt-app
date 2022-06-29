import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_PROJECT } from './mutations/projectMutations'
import { GET_CLIENTS } from '../components/queries/clientQueries'
import { GET_PROJECTS } from '../components/queries/projectQueries'
import Spinner from './Spinner'


function AddProjectModal() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [clientID, setClientID] = useState('')
    const [status, setStatus] = useState('new')


    //Add project
    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, status, clientID },
        refetchQueries: [{ query: GET_PROJECTS }]
    })

    // submit form
    const onsubmit = () => {
        console.log(name, description, status)
        if (name === '' || description === '' || status === '') {
            return alert('Please enter a project name and description and status')
        }
        addProject(name, description, clientID, status);
        setName('')
        setDescription('')
        setStatus('new')
        setClientID('')

    }

    //Get clients for select
    const { loading, error, data } = useQuery(GET_CLIENTS);
    if (loading) return <Spinner />
    if (error) return <p> Something went wrong</p>


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="d-flex align-items-center">
                    <FaList className='icon' />
                    <span>
                        Add Project
                    </span>
                </div>
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group flex-nowrap my-2">
                                <span className="input-group-text" id="addon-wrapping">Name</span>
                                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" aria-label="name" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group flex-nowrap my-2">
                                <span className="input-group-text" id="addon-wrapping">Email</span>
                                <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Project Description" aria-label="description" aria-describedby="descriptionname" />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Status</label>
                                <select
                                    id='status'
                                    className='form-select'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value='new'>Not Started</option>
                                    <option value='progress'>In Progress</option>
                                    <option value='completed'>Completed</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Client</label>
                                <select
                                    id='clientId'
                                    className='form-select'
                                    value={clientID}
                                    onChange={(e) => setClientID(e.target.value)}
                                >
                                    <option value=''>Select Client</option>
                                    {data.clients.map((client) => (
                                        <option key={client.id} value={client.id}>
                                            {client.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onsubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default AddProjectModal;