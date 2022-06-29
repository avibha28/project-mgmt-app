import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import {ADD_CLIENT } from '../components/mutations/ClientMutations'
import {GET_CLIENTS} from '../components/queries/clientQueries'

function AddClientModal() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const onsubmit = ()=>{
        console.log(name, email, phone)
        if(name==='' || phone==='' || email==='') {
        return alert('Please enter a name and a phone number and email address')
        }
        addClient(name, phone, email);
        setName('')
        setPhone('')
        setEmail('')

    }
    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {name, phone, email},
        refetchQueries: [{query: GET_CLIENTS} ]
    })
    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="d-flex align-items-center">
                    <FaUser className='icon' />
                    <span>
                    Add Client
                    </span>
                </div>
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Client</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group flex-nowrap my-2">
                                <span className="input-group-text" id="addon-wrapping">Name</span>
                                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" aria-label="name" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group flex-nowrap my-2">
                                <span className="input-group-text" id="addon-wrapping">Email</span>
                                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" aria-label="name" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group flex-nowrap my-2">
                                <span className="input-group-text" id="addon-wrapping">Phone</span>
                                <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" aria-label="name" aria-describedby="addon-wrapping" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onsubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClientModal