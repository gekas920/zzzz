import React from 'react';
import axios from "axios";
import useSWR from 'swr'
import Draggable from 'react-draggable'
import './item.css'
import Button from "../../../ui-components/Button";
import Store from "../../../Store/store";
import {observer} from "mobx-react-lite";

interface ItemProps{
    text:string;
    type:'cats'|'dogs'
}
const getFile = async (type:'cats'|'dogs'):Promise<string> => {
    if(type === 'cats'){
        const res = await axios.get<{file:string}>('https://aws.random.cat/meow');
        return res.data.file
    } else {
        const res = await axios.get<{message:string}>('https://dog.ceo/api/breeds/image/random');
        return res.data.message
    }
}

const getText = async ():Promise<{ text: string }> => {
    const res = await axios.get<{text:string}>('https://fish-text.ru/get?number=1');
    return res.data
}

const Item:React.FC<ItemProps> = ({text,type}) => {
    const id = `${text}${type}`;
    const {data:fileData} = useSWR(id,async ()=>await getFile(type));
    const {data:textData} = useSWR(id,getText);

    if(!fileData || !textData){
        return <div key={id} className='item'>Loading...</div>
    }

    const handleClick = ():void => {
        Store.removeItem(text,type)
    }

    return <Draggable cancel="img">
        <div key={id}
             className='item'
        >
            {text}
            <img src={fileData} alt={type} className='item-image'/>
            <p className='item-text'>{textData.text}</p>
            <Button onClick={handleClick}>Remove</Button>
        </div>
    </Draggable>
}


export default observer(Item);