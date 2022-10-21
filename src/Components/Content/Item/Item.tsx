import React, { useId } from 'react';
import axios from "axios";
import useSWR from 'swr'
import Draggable from 'react-draggable'
import './item.css'
import Button from "../../../ui-components/Button";
import Store from "../../../Store/store";
import {observer} from "mobx-react-lite";
interface ItemProps{
    text:string;
}
const getFile = async ():Promise<{ file: string }> => {
    const res = await axios.get<{file:string}>('https://aws.random.cat/meow');
    return res.data
}

const getText = async ():Promise<{ text: string }> => {
    const res = await axios.get<{text:string}>('https://fish-text.ru/get?number=1');
    return res.data
}

const Item:React.FC<ItemProps> = ({text}) => {
    const id = useId();
    const {data:fileData} = useSWR(id+text+'file',getFile);
    const {data:textData} = useSWR(id+text+'text',getText);

    if(!fileData || !textData){
        return <div key={id + text} className='item'>Loading...</div>
    }

    const handleClick = ():void => {
        Store.removeItem(text)
    }

    return <Draggable cancel="img">
        <div key={id + text}
             className='item'
        >
            {text}
            <img src={fileData.file} alt='cat' className='item-image'/>
            <p className='item-text'>{textData.text}</p>
            <Button onClick={handleClick}>Remove</Button>
        </div>
    </Draggable>
}


export default observer(Item);