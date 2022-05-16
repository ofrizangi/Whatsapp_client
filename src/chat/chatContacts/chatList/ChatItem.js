import '../../chat.css'
import { useState, useEffect } from 'react';

function ChatItem(props) {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
          setDate(new Date());
        }, 30000);
      });
    

    const goToMethod = function(){
        props.setMessages(props.contact.messages);
        props.setUser({userName: props.contact.userName,nickName:props.contact.nickName, image: props.contact.image, messages: props.contact.messages});
    }

    const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = DAY * 365;

const getTimeAgoString = (timestamp) => {
    const differance = date - timestamp,
        getTimeString = (value, unit) => {
            const round = Math.round(differance / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''} ago`;
        };
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
            <img src={props.contact.image} alt="Avatar" className="avatar"></img>
            
            <span className="m-2 ms-3 nameContact" >
                <div className='chat-name'>{props.contact.nickName}</div>
                <div className='last-message'>
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'text' && <div>{ props.contact.messages[props.contact.messages.length-1].message}</div>} 
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'image' && <div> <i className="bi bi-image"></i> image</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'video' && <div> <i className="bi bi-camera-video"></i> video</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'audio' && <div> <i className="bi bi-mic"></i> audio</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'file' && <div> <i className="bi bi-filetype-pdf"></i> file</div>}
                </div>
            
            </span> 
            
            <span className='time-ago'> {props.contact.messages.length !== 0  && getTimeAgoString(props.contact.messages[props.contact.messages.length-1].date)}   </span>
      
            </button>

    );
}

export default ChatItem
