import ChatItem from "./ChatItem";
import { useEffect, useState } from "react";

function ChatList(props){


    const [contactsList, setContactsList] = useState([])



useEffect(() => {
    async function getContacts() {
        console.log(props.token)
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + props.token},
        };
        const response = await fetch('https://localhost:7271/api/contacts', requestOptions);
        const stat = await response.json();
        console.log(stat)
        setContactsList(stat);
    }
    getContacts();
  }, []);



// const showList = function () {
//     var list = getContacts();
    
//     return <div className="list-group list-group-flush">
//     { 
//     list.map((item)=>
//     console.log(item.id))
//     //<ChatItem key={item.id}/>)
//     }
//     </div> 


//     }
    return(
        <>


        <div className="list-group list-group-flush">
            { 
            props.contacts.map((item)=>
            <ChatItem key={item.userName} contact={item} setUser={props.setUser} setMessages = {props.setMessages} token={props.token}/>)
            }
        </div> 


        <div className="list-group list-group-flush">
            { 
            contactsList.map((item)=>
            console.log(item)
            //  <ChatItem key={item.id} contact={item} setUser={props.setUser} setMessages = {props.setMessages}/>
            )}
        </div> 
        </>
        );
}
export default ChatList
