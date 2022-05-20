import './message.css'


function MessageBox(props) {

    let className = "alert message ".concat(props.item.sent ? 'alert-success send' : 'alert-warning recieve');


        // const chekTypeMassage = function () {
        //     if (props.item.type === 'text') {
        //         return  <div className={className} >
        //             <div>{props.item.message}</div>
        //            <div className='chat-log_time'>{props.item.date.toLocaleString()}</div>
        //         </div>
        //     }
        //     else if (props.item.type === 'image') {
        //         return <div className={className}>
        //             <div><img src={props.item.message} alt="message"className="sizeImage"></img></div>
        //             <div  className='chat-log_time'>{props.item.date.toLocaleString()}</div>
        //             </div>
        //     }
        //     else if (props.item.type === 'video') {
        //         return <div className={className}>
        //             <div><video controls src={props.item.message} className="sizeImage"></video></div>
        //             <div className='chat-log_time'>{props.item.date.toLocaleString()}</div>

        //             </div>
        //     }
        //     else if(props.item.type === 'audio'){
        //         return <div className={className}>
        //         <div > <audio className='my-audio' controls src={props.item.message}> </audio></div>
        //         <div  className='chat-log_time'>{props.item.date.toLocaleString()}</div>
        //         </div>
        //     }
        //     else if(props.item.type === 'file'){
        //         return <div className={className}>
        //         <div > 
        //         <iframe src={props.item.message} title="textBox" className='sizeImage'> </iframe> </div>
        //         <div  className='chat-log_time'>{props.item.date.toLocaleString()}</div>
        //         </div>
        //     }
        //     }
            

    return (
        <>
         <div className={className} >
            <div>{props.item.content}</div>
            <div className='chat-log_time'>{new Date(props.item.created).toDateString()}</div>
        </div>
        </>
    );

}

export default MessageBox;  