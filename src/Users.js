import hananRecord from './videos/hananRecord.ogg'
import edenVideo from './videos/edenVideo.mp4'
import miriAudio from './videos/miriAudio.ogg'
import noaVideo from './videos/noaVideo.mp4'

// sent = true means the message was sent by the current user, false means he recieved it
export const contacts = [{userName:"AvivGefen", nickName: "avivi", image:"https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/442174", messages:[{message:"hi aviv", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text', date: new Date()} , {message:"come to my show!", sentByMe:false, type: 'text', date: new Date()}] },
{userName:"Miri Masika" ,nickName: "miri", image:"https://medias.atmag.co.il/www/uploads/2019/11/%D7%9E%D7%99%D7%A8%D7%99-%D7%9E%D7%A1%D7%99%D7%A7%D7%94-%D7%91%D7%A7%D7%9E%D7%A4%D7%99%D7%99%D7%9F-%D7%9C%D7%A1%D7%93%D7%A8%D7%AA-%D7%9E%D7%A8%D7%9B%D7%9B%D7%99-%D7%94%D7%9B%D7%91%D7%99%D7%A1%D7%94-%D7%A9%D7%9C-%D7%9C%D7%A0%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6-3-1140x641-1575204098.jpg",messages:[{message:"hi miri", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text', date: new Date()}, {message:miriAudio, sentByMe:false, type: 'audio', date: new Date()}] },
{userName:"Eden Ben Zaken",nickName: "edna",image:"https://ynet-images1.yit.co.il/picserver5/crop_images/2021/12/01/HynEP0NKK/HynEP0NKK_0_186_1200_675_0_x-large.jpg", messages:[{message:"hi eden", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text' , date: new Date()} , {message:edenVideo, sentByMe:false, type: 'video' , date: new Date()}]},
{userName:"Hanan Ben Ari", nickName:"hanania", image:"https://www.hatarbut.co.il/wp-content/uploads/2017/08/%D7%97%D7%A0%D7%9F-%D7%91%D7%9F-%D7%90%D7%A8%D7%99-1024x1024.jpg",messages:[{message:"hi hanani", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text', date: new Date()} ,  {message:hananRecord, sentByMe:false, type: 'audio', date: new Date()}]},
{userName:"Keren Peles", nickName:"keren", image:"https://yt3.ggpht.com/ytc/AKedOLQpfSAj-ft7uLe7eC19qe1HSiyFBujOoD2oTqSs=s900-c-k-c0x00ffffff-no-rj", messages:[{message:"hi keren", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text', date: new Date()} , {message:"https://i1.sndcdn.com/artworks-AytoY4vjqe1C8WqI-zu3Sew-t500x500.jpg", sentByMe:false, type: 'image', date: new Date()}]},
{userName:"Noa Kirel", nickName:"noni", image:"https://www.frogi.co.il/picserver/s3/2022/03/31/3d475c4ca4238a0b993.png", messages:[{message:"hi noa", sentByMe:true, type: 'text', date: new Date()},  {message:"hello", sentByMe:false, type: 'text', date: new Date()} ,{message:noaVideo , sentByMe:false, type: 'video', date: new Date()} ]}
];


    const contactsOfAviv = []
    contactsOfAviv.push({userName:contacts[1].userName, nickName:contacts[1].nickName , image:contacts[1].image, messages:contacts[1].messages})
    contactsOfAviv.push({userName:contacts[2].userName, nickName:contacts[2].nickName , image:contacts[2].image, messages:contacts[2].messages})
    contactsOfAviv.push({userName:contacts[3].userName, nickName:contacts[3].nickName , image:contacts[3].image, messages:contacts[3].messages})
    contactsOfAviv.push({userName:contacts[4].userName, nickName:contacts[4].nickName , image:contacts[4].image, messages:contacts[4].messages})
    contactsOfAviv.push({userName:contacts[5].userName, nickName:contacts[5].nickName , image:contacts[5].image, messages:contacts[5].messages})

    const contactsOfMiri = []
    contactsOfMiri.push({userName:contacts[0].userName, nickName:contacts[0].nickName , image:contacts[0].image, messages:contacts[0].messages})
    contactsOfMiri.push({userName:contacts[2].userName, nickName:contacts[2].nickName , image:contacts[2].image, messages:contacts[2].messages})
    contactsOfMiri.push({userName:contacts[3].userName, nickName:contacts[3].nickName , image:contacts[3].image, messages:contacts[3].messages})
    contactsOfMiri.push({userName:contacts[4].userName, nickName:contacts[4].nickName , image:contacts[4].image, messages:contacts[4].messages})
    contactsOfMiri.push({userName:contacts[5].userName, nickName:contacts[5].nickName , image:contacts[5].image, messages:contacts[5].messages})

    const contactsOfEden = []
    contactsOfEden.push({userName:contacts[0].userName, nickName:contacts[0].nickName , image:contacts[0].image, messages:contacts[0].messages})
    contactsOfEden.push({userName:contacts[1].userName, nickName:contacts[1].nickName , image:contacts[1].image, messages:contacts[1].messages})
    contactsOfEden.push({userName:contacts[3].userName, nickName:contacts[3].nickName , image:contacts[3].image, messages:contacts[3].messages})
    contactsOfEden.push({userName:contacts[4].userName, nickName:contacts[4].nickName , image:contacts[4].image, messages:contacts[4].messages})
    contactsOfEden.push({userName:contacts[5].userName, nickName:contacts[5].nickName , image:contacts[5].image, messages:contacts[5].messages})

    const contactsOfHanan = []
    contactsOfHanan.push({userName:contacts[0].userName, nickName:contacts[0].nickName , image:contacts[0].image, messages:contacts[0].messages})
    contactsOfHanan.push({userName:contacts[1].userName, nickName:contacts[1].nickName , image:contacts[1].image, messages:contacts[1].messages})
    contactsOfHanan.push({userName:contacts[2].userName, nickName:contacts[2].nickName , image:contacts[2].image, messages:contacts[2].messages})
    contactsOfHanan.push({userName:contacts[4].userName, nickName:contacts[4].nickName , image:contacts[4].image, messages:contacts[4].messages})
    contactsOfHanan.push({userName:contacts[5].userName, nickName:contacts[5].nickName , image:contacts[5].image, messages:contacts[5].messages})

    
    const contactsOfKeren = []
    contactsOfKeren.push({userName:contacts[0].userName, nickName:contacts[0].nickName , image:contacts[0].image, messages:contacts[0].messages})
    contactsOfKeren.push({userName:contacts[1].userName, nickName:contacts[1].nickName , image:contacts[1].image, messages:contacts[1].messages})
    contactsOfKeren.push({userName:contacts[2].userName, nickName:contacts[2].nickName , image:contacts[2].image, messages:contacts[2].messages})
    contactsOfKeren.push({userName:contacts[3].userName, nickName:contacts[3].nickName , image:contacts[3].image, messages:contacts[3].messages})
    contactsOfKeren.push({userName:contacts[5].userName, nickName:contacts[5].nickName , image:contacts[5].image, messages:contacts[5].messages})

    const contactsOfNoa = []
    contactsOfNoa.push({userName:contacts[0].userName, nickName:contacts[0].nickName , image:contacts[0].image, messages:contacts[0].messages})
    contactsOfNoa.push({userName:contacts[1].userName, nickName:contacts[1].nickName , image:contacts[1].image, messages:contacts[1].messages})
    contactsOfNoa.push({userName:contacts[2].userName, nickName:contacts[2].nickName , image:contacts[2].image, messages:contacts[2].messages})
    contactsOfNoa.push({userName:contacts[3].userName, nickName:contacts[3].nickName , image:contacts[3].image, messages:contacts[3].messages})
    contactsOfNoa.push({userName:contacts[4].userName, nickName:contacts[4].nickName , image:contacts[4].image, messages:contacts[4].messages})


    
    export const users = [
        {userName: "AvivGefen" , nickName: "avivi" , image: "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/442174", password: "1234567a", contacts: contactsOfAviv},
        {userName: "Miri Masika" , nickName: "miri" , image: "https://medias.atmag.co.il/www/uploads/2019/11/%D7%9E%D7%99%D7%A8%D7%99-%D7%9E%D7%A1%D7%99%D7%A7%D7%94-%D7%91%D7%A7%D7%9E%D7%A4%D7%99%D7%99%D7%9F-%D7%9C%D7%A1%D7%93%D7%A8%D7%AA-%D7%9E%D7%A8%D7%9B%D7%9B%D7%99-%D7%94%D7%9B%D7%91%D7%99%D7%A1%D7%94-%D7%A9%D7%9C-%D7%9C%D7%A0%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6-3-1140x641-1575204098.jpg", password: "abcd1234", contacts: contactsOfMiri },
        {userName: "Eden Ben Zaken" , nickName: "edna" , image: "https://ynet-images1.yit.co.il/picserver5/crop_images/2021/12/01/HynEP0NKK/HynEP0NKK_0_186_1200_675_0_x-large.jpg", password: "aaaaaaaa8", contacts: contactsOfEden },
        {userName: "Hanan Ben Ari" , nickName: "hanania" , image: "https://www.hatarbut.co.il/wp-content/uploads/2017/08/%D7%97%D7%A0%D7%9F-%D7%91%D7%9F-%D7%90%D7%A8%D7%99-1024x1024.jpg", password: "1c1c1c1c1c", contacts:contactsOfHanan },
        {userName: "Keren Peles" , nickName: "keren" , image: "https://yt3.ggpht.com/ytc/AKedOLQpfSAj-ft7uLe7eC19qe1HSiyFBujOoD2oTqSs=s900-c-k-c0x00ffffff-no-rj", password: "keran666", contacts: contactsOfKeren },
        {userName: "Noa Kirel" , nickName: "noni" , image: "https://www.frogi.co.il/picserver/s3/2022/03/31/3d475c4ca4238a0b993.png", password: "noni5555", contacts: contactsOfNoa }

        ];
