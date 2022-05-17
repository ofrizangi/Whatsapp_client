import AddContact from "./AddContact";

function UserProfile(props){



    return(

        <div className="top-row list-group-item d-flex align-items-center">
            <img src={props.image} alt="Avatar" className="avatar"></img>
            <span className="w-100 m-2 ms-3 nameContact chat-name" >{props.userName}</span>
            <AddContact setContact={props.setContact} existContacts={props.existContacts}  indexOfMe = {props.indexOfMe} token={props.token}/>
            </div>

    );


}

export default UserProfile;

