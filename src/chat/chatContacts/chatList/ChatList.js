import ChatItem from "./ChatItem";

function ChatList(props){

    return(

        <div className="list-group list-group-flush">
            { props.contacts.map((item)=> <ChatItem key={item.userName} contact={item} setUser={props.setUser} setMessages = {props.setMessages}/>) }
        </div> 

        );
}
export default ChatList
