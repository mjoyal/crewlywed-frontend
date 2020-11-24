import React from 'react';
import { useParams } from 'react-router-dom';

export default function GameLoop (props) {
  const params = useParams();
  console.log(params);
  return (
    <p>This is the gameloop controller! {params.id}</p>
  );
}