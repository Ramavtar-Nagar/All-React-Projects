import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

    const navigation = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigation(-1)
        }, 3000);
    }, []);
  return (
    <>
        <h1>Oops!!! Something Went Wrong </h1>
    </>
  )
}
