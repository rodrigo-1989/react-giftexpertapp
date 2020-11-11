import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

 import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => { 

       const { data:images } =  useFetchGifs( category );
    return (
        <>
        <h3>{ category }</h3>
       
            <div className="card-grid"> 
                    {
                    images.map( img =>(
                        <GiftGridItem key = { img.id }  { ...img }/>
                    ))
                    }
            </div>
        </>
    )
}
 