import ChatItem from "./ChatItem";

function ChatList(props){


async function getContacts() {
    console.log(props.token)
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + props.token},
    };
    const response = fetch('https://localhost:7271/api/contacts', requestOptions);
    const stat = await (await response).text();
    console.log(stat)
    return stat;
}


const showList = function () {
    var list = getContacts();
    
    return <div className="list-group list-group-flush">
    { 
    list.map((item)=>
    console.log(item.id))
    //<ChatItem key={item.id}/>)
    }
    </div> 


    }
    return(
        <>

        <div className="list-group list-group-flush">
            { 
            props.contacts.map((item)=>
            <ChatItem key={item.userName} contact={item} setUser={props.setUser} setMessages = {props.setMessages}/>)
            }
        </div> 
        </>
        );
}
export default ChatList
