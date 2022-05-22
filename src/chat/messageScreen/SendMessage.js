import { useRef, useEffect, useState } from 'react';
import '../chat.css'
import WindowPop from '../attachItem/WindowPop';
import { HubConnectionBuilder } from '@microsoft/signalr';

function SendMessage(props) {

  const Api = async function () {
    const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + props.token },
    };
    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages'
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
  
  var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/58'
  fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data));
  
  const requestOptions3 = {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + props.token },
  };
  var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/61'
  fetch(url, requestOptions3)
  .then(response => response.json())
  .then(data => console.log(data));
  
  
  const requestOptions4 = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token  },
    body: JSON.stringify({Content: "hiiii is good"}),
  };
  var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/104'
  fetch(url, requestOptions4)
  .then(response => response.json())
  .then(data => console.log(data));
  }




  const [ connection, setConnection ] = useState(null);
  const [ chat, setChat ] = useState([]);
  const latestChat = useRef(null);

  latestChat.current = chat;

  useEffect(() => {
      const newConnection = new HubConnectionBuilder()
          .withUrl('https://localhost:7271/hubs/chat')
          .withAutomaticReconnect()
          .build();

      setConnection(newConnection);
  }, []);

  useEffect(() => {
      if (connection) {
          connection.start()
              .then(result => {
                  console.log('Connected!');
                  
                  connection.on('ReceiveMessage', message => {
                    set(message)
                  });
              })
              .catch(e => console.log('Connection failed: ', e));
      }
  }, [connection]);

  const sendMessageSignalIR = async (transfer) => {
    connection.invoke("registerConId", props.myUser, props.chatUser)
      connection.invoke("SendMessage", transfer)
  }

  async function set(message){
    console.log(message)
    const messages = await getAllContactMessages();
    console.log(messages)
    props.setMessage(messages)
    await setContacts();
  }










  //from here is relevent

  let input = useRef()

  const uploadText = (event) => {
    let mes = input.current.value
    input.current.value = ''
    if (mes!==""){
      setNewMessage("text", mes)}
  }


async function sendMessageToDB(message,token,contactName) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token  },
        body: JSON.stringify(message),
    };
    var url = 'https://localhost:7271/api/contacts/' + contactName + '/' + 'messages'
    const response = await fetch(url, requestOptions);
    return response.status;
}

async function getServerContact(contact) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + props.token },
  };
  var url = 'https://localhost:7271/api/contacts/' + contact
  const response = await fetch(url, requestOptions);
  const stat = await response.json();
  console.log(stat)
  return stat;
}



async function sendMessageToDBofContact(message) {
  //אני רוצה לקבל את השרת של האיש קשר אליו אני שולחת את ההודעה
  console.log(message.to)
  var serverContact = await getServerContact(message.to)
  console.log("hey",  serverContact.server)
  const requestOptions1 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token  },
    body: JSON.stringify(message),
  };
  var url = 'https://' + serverContact.server + '/api/transfer'
  const response1 = await fetch(url, requestOptions1);
  return response1.status;
}

async function getAllContactMessages(){
  console.log("in")
  const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + props.token },
    };
    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages'
    const response = await fetch(url, requestOptions);
    const messageList = await response.json();
    console.log(messageList)
    return messageList;
}

async function setContacts() {
  console.log(props.token)
  const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + props.token},
  };
  const response = await fetch('https://localhost:7271/api/contacts', requestOptions);
  const list = await response.json();
  console.log(list)
  props.setContactsList(list);
}



const setNewMessage = async function (type, mes) {
    const stat = await sendMessageToDB({content: mes}, props.token, props.chatUser);
    if(stat < 300){
      var transfer = {from: props.myUser ,to: props.chatUser ,content: mes}
      const stat2 = await sendMessageToDBofContact(transfer)
      sendMessageSignalIR(transfer)
    }

    // let index1 = props.arrContact.findIndex(x => (x.userName === props.chatUser))
    // const currentTimeSatmp = new Date()
    // props.arrContact[index1].messages = [...props.arrContact[index1].messages, { message: mes, sentByMe: true, type: type, date:currentTimeSatmp }]
    // props.arrContactMessage.messages = [...props.arrContactMessage.messages, { message: mes, sentByMe: false, type: type, date:currentTimeSatmp }]
    // props.setMessage((prev) => {
    //   return prev.concat({ message: mes2, sent: true, date:currentTimeSatmp })
    // })
    const messages = await getAllContactMessages();
    props.setMessage(messages)
    await setContacts();
}



const checkIfEnter = function (event) {
    if (event.key === 'Enter')
    uploadText("text")
}


  return (

    <div className="down-row d-flex align-items-center">
      {/* <WindowPop setNewMessage={setNewMessage} /> */}
      <input type="text" id='TypingMessage' className="form-control shadow-none" placeholder="Typing a message" aria-label="Typing a message"
        ref={input} onKeyDown={checkIfEnter}></input>
      <i className="bi bi-send icon-send" onClick={uploadText}  ></i>
    </div>
  );
}

export default SendMessage
