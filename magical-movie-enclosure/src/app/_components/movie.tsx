"use client";
import { api } from "~/trpc/react";
import React, { useEffect, useState } from 'react';
import "~/styles/Pages.css"
import { Selection } from './selection';
import { movieMusicItem } from "../page";

interface IProps {
    movies?: movieMusicItem[],
}

const Movie = (props: IProps) => {

    useEffect(() => {
        console.log(props.movies);
    }, [props.movies]);

    return(
        <div>
            <div className="main-text">
                Movies Selection
                <div className='selection-group'>
                {props.movies && props.movies.map(item => (
                    <Selection id={item.s3id} image={'https://d2nge2qmdjmasy.cloudfront.net/' + item.img} name={item.name} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Movie;
