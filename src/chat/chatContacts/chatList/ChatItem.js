import '../../chat.css'
import { useState, useEffect } from 'react';
import avatar from './avatar.png' 

function ChatItem(props) {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
          setDate(new Date());
        }, 30000);
      });


    async function goToMethod(){

        // editContact({name: "vbvnbvnbvnbv" , server: "localhost:7271"});
        // deleteContact();
        const contact = await showContact();
        // console.log(cont)
        if(contact != false){
            props.setUser({userName: contact.id ,nickName:contact.name, image: avatar});
        }
        
        const messages = await getAllContactMessages();
        console.log(messages)
        // let newMessages = []
        // messages.map((item)=>{
        //     newMessages.concat({ content: item.content , created: item.created, sent: item.sent})
        // })
        // console.log(newMessages)
        props.setMessages(messages);

    }


    async function getAllContactMessages(){

        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + props.token },
          };
          var url = 'https://localhost:7271/api/contacts/' + props.contact.id + '/' + 'messages'
          const response = await fetch(url, requestOptions);
          const messageList = await response.json();
          return messageList;
    }

    async function showContact(){
        // console.log(props.token)
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + props.token},
        };
        const url = 'https://localhost:7271/api/contacts/' + props.contact.id;
        const response = await fetch(url, requestOptions);
        if(response.status < 300){
            const stat = await response.json();
            return stat;
        }
        return false;
         
    }



    async function deleteContact(){

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + props.token},
        };
        const url = 'https://localhost:7271/api/contacts/' + props.contact.id;
        const response = await fetch(url, requestOptions);

        // status 200 if succeed and 400 oterwise
        const stat = response.status;
        console.log(stat)
    }


    async function editContact(editdetails){
        console.log(JSON.stringify(editdetails))

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token},
            body: JSON.stringify(editdetails),
        };
        const url = 'https://localhost:7271/api/contacts/' + props.contact.UserName;
        const response = await fetch(url, requestOptions);

        // status 200 if succeed and 400 oterwise
        const stat = response.status;
        console.log(stat)
    }


    const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = DAY * 365;

    function convertFromStringToDate(responseDate) {
        let dateComponents = responseDate.split(' ');
        let datePieces = dateComponents[0].split("/");
        let timePieces = dateComponents[1].split(":");
        let date = new Date(datePieces[2], (datePieces[1] - 1), datePieces[0],
                             timePieces[0], timePieces[1], timePieces[2]);
        console.log(date);
        getTimeAgoString(date);
    }
    


const getTimeAgoString = (responseDate) => {
    let dateComponents = responseDate.split(' ');
    let datePieces = dateComponents[0].split("/");
    let timePieces = dateComponents[1].split(":");
    let dateLastMessage = new Date(datePieces[2], (datePieces[1] - 1), datePieces[0],
                         timePieces[0], timePieces[1], timePieces[2]);
    console.log(date);
    const differance = date - dateLastMessage,
        getTimeString = (value, unit) => {
            const round = Math.round(differance / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''} ago`;
        };
        // console.log("hiii")
        // console.log(new Date (new Date(props.contact.lastdate).toDateString()))
        // console.log( Date.parse(props.contact.lastdate))
        // console.log("hiii")
        // console.log(new Date(props.contact.lastdate))
        // console.log(props.contact.lastdate)
    if (differance < MINUTE) {
        return 'now';
    }
    if (differance < HOUR) {
        return getTimeString(MINUTE, 'minute');
    }
    if (differance < DAY) {
        return getTimeString(HOUR, 'hour');
    }
    if (differance < MONTH) {
        return getTimeString(DAY, 'day');
    }
    if (differance < YEAR) {
        return getTimeString(MONTH, 'month');
    }
    return getTimeString(YEAR, 'year');
};

    return (
        
      
            <button type="button" className="list-group-item list-group-item-action d-flex align-items-center" onClick={goToMethod}>
            <img src={avatar} alt="Avatar" className="avatar"></img>
            
            <span className="m-2 ms-3 nameContact" >
                <div className='chat-name'>{props.contact.name}</div>
                <div className='last-message'>
                {/* {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'text' && <div>{ props.contact.messages[props.contact.messages.length-1].message}</div>} 
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'image' && <div> <i className="bi bi-image"></i> image</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'video' && <div> <i className="bi bi-camera-video"></i> video</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'audio' && <div> <i className="bi bi-mic"></i> audio</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'file' && <div> <i className="bi bi-filetype-pdf"></i> file</div>} */}

                {props.contact.last != null && <div>{props.contact.last}</div>}
                </div>
            
            </span> 
            
            {/* <span className='time-ago'> {props.contact.messages.length !== 0  && getTimeAgoString(props.contact.messages[props.contact.messages.length-1].date)}   </span> */}

            <span className='time-ago'> {props.contact.lastdate != null  && getTimeAgoString(props.contact.lastdate)}   </span>
    

            </button>

    );
}

export default ChatItem
