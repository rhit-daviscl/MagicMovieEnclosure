"use client"
import { api } from "~/trpc/react";
import React from 'react';
import '~/styles/App.css';
import { Nav } from './nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './movie';
import Home from './home';
import Music from './music';
import Stream from './stream';
import { movieMusicItem } from "../page";

interface IProps {
  movies?: movieMusicItem[],
  music?: movieMusicItem[],
}

export function App(props: IProps) {
  
  return (
    <BrowserRouter basename="/">
      <div className='main-background'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movie movies={props.movies}/>} />
          <Route path='/music' element={<Music music={props.music}/>} />
          <Route path='/stream/:id' element={<Stream />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
