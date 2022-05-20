import { useLocation } from "react-router-dom";
import ChatList from "./chatContacts/chatList/ChatList";
import {useState} from 'react';
import SendMessage from "./messageScreen/SendMessage";
import './chat.css'
import UserTextBox from './messageScreen/UserTextBox'
import {users} from '../Users'
import welcome from './welcome.jpg' 
import NameContact from './messageScreen/NameContact'
import UserProfile from "./chatContacts/topLine/UserProfile";

function Chat() {


  const { state } = useLocation();
  const {  token, userName } = state;
  // let user = users[index];


  // new !!!!!!!!!!!! - for DB (no arrays)
  const [contactsList, setContactsList] = useState([])


  // let [contact, setContact] = useState(user.contacts);




  const [messages, setMessage] = useState([])
  const [userChatPrassed, setUserChatPrassed] = useState(null);

  // const getArrOfUserContact = function(){
  //   //index 1 - the index of the contact we are sending a message to in the users array 
  //   // index 2 - the index of me in the array of the contacts whom i am talking with
  //     let index1 = users.findIndex(x => (x.userName ===  userChatPrassed.userName))
  //     let index2 = users[index1].contacts.findIndex(x => (x.userName ===  user.userName))
  //   // if the user does not exist in my contacts array
  //     if(index2===-1){
  //       // indexx2 - the index of the contact i am talking with in my contacts array
  //       let indexx2 = users[state.index].contacts.findIndex(x => (x.userName ===  userChatPrassed.userName))
  //       let massage = [];
  //       users[state.index].contacts[indexx2].messages.map((item)=> massage.push( {message:item.message, sentByMe:!item.sentByMe, type: item.type, date: item.date}))
  //       users[index1].contacts= [...users[index1].contacts,{userName: user.userName, nickName:user.nickName, image:user.image, messages:massage }]
  //       index2=users[index1].contacts.length-1
  //     }
  //     return users[index1].contacts[index2];
  // }


  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-4" id="leftMenu">

        <UserProfile userName={userName}  token={token} setContactsList={setContactsList}/>

          <div className="scroll">
            {<ChatList setUser={setUserChatPrassed} setMessages = {setMessage} token={token}  contactsList={contactsList} setContactsList={setContactsList}/>}
          </div>
        </div>  
        <div className="col-8" id="chats">
        {userChatPrassed === null && <img src={welcome} alt="welcome" className="welcome"></img>}
        
        {userChatPrassed !== null && <NameContact item={userChatPrassed}/>}
        <div className="message-scroll">
        { userChatPrassed !== null && <UserTextBox messages = {messages}/>}  
      </div>
      <div>   

        {userChatPrassed !== null && <SendMessage setMessage={setMessage} myUser={userName} chatUser={userChatPrassed.userName} token={token} setContactsList={setContactsList}/>}
        </div>
        </div>
      </div>
     </div>
  );
}
export default Chat
