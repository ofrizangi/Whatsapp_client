import '../../chat.css'
import { React, useRef } from 'react';
import { users } from '../../../Users';

function AddContact(props) {

    let name = useRef();

    const addContact = function (event) {
        event.preventDefault();

        let contName = name.current.value;
        name.current.value = ''

        let indexOfUserInArrey= users.findIndex(x => (x.userName === contName))

        if (indexOfUserInArrey === -1) {
            alert("This user does nor exist!")
        }
        else if( props.existContacts.findIndex(x => (x.userName === contName)) !== -1)
        {
            alert("You can't add someone who is allready your contact")
        }
        else if(contName===props.userName)
        {
            alert("it is You :(")
        }
        
    
        else{
        props.setContact((prev)=>{
            return prev.concat({userName: contName, nickName:users[indexOfUserInArrey].nickName , image: users[indexOfUserInArrey].image, messages:[]})
        })

        users[props.indexOfMe].contacts = [...props.existContacts,  {userName: contName, nickName:users[indexOfUserInArrey].nickName, image: users[indexOfUserInArrey].image ,messages:[]}]
    }
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



