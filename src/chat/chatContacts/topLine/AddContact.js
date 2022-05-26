import '../../chat.css'
import { React, useEffect, useRef } from 'react';





async function sendContactToDB(contact, token) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token  },
        body: JSON.stringify(contact),
    };
    const response = await fetch('https://localhost:7271/api/contacts', requestOptions);
    const stat = await response.status;
    return stat;
}




async function inviteContact(inivitation, token, server) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token  },
        body: JSON.stringify(inivitation),
    };
    const response = await fetch('https://' + server + '/api/invitations',  requestOptions);
    const stat = response.status;
    return stat;
}





function AddContact(props) {

    let name = useRef();
    let nickName = useRef();
    let server = useRef();


    async function getContacts() {
        console.log(props.token)
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + props.token},
        };
        const response = await fetch('https://localhost:7271/api/contacts', requestOptions);
        if(response.status < 300){
            const list = await response.json();
            console.log(list)
            props.setContactsList(list);
        }
        else{
            alert("A problem occurred while getting contacts")
        }
    }


    async function addContact(event) {
        event.preventDefault();

        let stat = await sendContactToDB({id: name.current.value, name: nickName.current.value, server: server.current.value}, props.token);
        if(stat < 300){
            const statServer2 =  await inviteContact({from: props.userName , to: name.current.value, server: server.current.value}, props.token, server.current.value);
            await getContacts();
        }
        else{
            alert("not a valid contact")
        }

         name.current.value = ''
         nickName.current.value = ''
         server.current.value = ''
    }
 
    return (

            <div>

            <i className="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Enter User Name</label>
                                    <input type="text" className="form-control" id="recipient-name" ref={name}></input>
                                    <label htmlFor="recipient-name" className="col-form-label">Enter Nick Name</label>
                                    <input type="text" className="form-control" id="recipient-name" ref={nickName}></input>
                                    <label htmlFor="recipient-name" className="col-form-label">Enter server</label>
                                    <input type="text" className="form-control" id="recipient-name" ref={server}></input>
                                    <button type="submit" id="btn" className=" btn btn_start btn-primary" data-bs-dismiss="modal" onClick={addContact} > Add</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </div>


        
    );
}

export default AddContact

