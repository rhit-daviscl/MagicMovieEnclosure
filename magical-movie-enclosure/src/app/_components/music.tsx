import { api } from "~/trpc/react";
import React, { useEffect } from 'react';
import "~/styles/Pages.css"
import { Selection } from './selection';
import { movieMusicItem } from "../page";

interface IProps {
    music?: movieMusicItem[],
}

const Music = (props: IProps) => {

    useEffect(() => {
        console.log(props.music);
    }, [props.music]);
    
    return(
        <div>
            <div className="main-text">
                Music Selection
                <div className='selection-group'>
                {props.music && props.music.map(item => (
                    <Selection id={item.s3id} image={'https://d2nge2qmdjmasy.cloudfront.net/' + item.img} name={item.name} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Music;
