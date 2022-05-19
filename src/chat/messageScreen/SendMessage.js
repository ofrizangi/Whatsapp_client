import { useRef } from 'react';
import '../chat.css'
import WindowPop from '../attachItem/WindowPop';

function SendMessage(props) {

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
    //var url = 'https://localhost:7271/api/messages'
    const response = await fetch(url, requestOptions);
    //const stat = await response.text();
    //console.log(stat)
  
}

  const setNewMessage = async function (type, mes) {
    await sendMessageToDB({Content: mes}, props.token, props.chatUser);
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + props.token },
    };
    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages'
    fetch(url, requestOptions)
    .then(response => response.text())
    .then(data => console.log(data));

    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/58'
    fetch(url, requestOptions)
    .then(response => response.text())
    .then(data => console.log(data));

    const requestOptions3 = {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + props.token },
  };
    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/61'
    fetch(url, requestOptions3)
    .then(response => response.text())
    .then(data => console.log(data));


    const requestOptions4 = {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + props.token },
  };
    var url = 'https://localhost:7271/api/contacts/' + props.chatUser + '/' + 'messages/80'
    fetch(url, requestOptions4)
    .then(response => response.text())
    .then(data => console.log(data));




    let index1 = props.arrContact.findIndex(x => (x.userName === props.chatUser))
    const currentTimeSatmp = new Date()
    props.arrContact[index1].messages = [...props.arrContact[index1].messages, { message: mes, sentByMe: true, type: type, date:currentTimeSatmp }]
    props.arrContactMessage.messages = [...props.arrContactMessage.messages, { message: mes, sentByMe: false, type: type, date:currentTimeSatmp }]
    let mes2 = mes
    props.setMessage((prev) => {
      return prev.concat({ message: mes2, sentByMe: true, type: type, date:currentTimeSatmp })
    })
  }



  const checkIfEnter = function (event) {
    if (event.key === 'Enter')
    uploadText("text")
  }


  return (

    <div className="down-row d-flex align-items-center">
      <WindowPop setNewMessage={setNewMessage} />
      <input type="text" id='TypingMessage' className="form-control shadow-none" placeholder="Typing a message" aria-label="Typing a message"
        ref={input} onKeyDown={checkIfEnter}></input>
      <i className="bi bi-send icon-send" onClick={uploadText}  ></i>
    </div>
  );
}

export default SendMessage
