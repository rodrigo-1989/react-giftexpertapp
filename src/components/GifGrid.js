import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';
export const GifGrid = ({ category }) => { 

       const { data:images } =  useFetchGifs( category );
    return (
        <>
        <h3>{ category }</h3>
       
            <div className="card-grid"> 
                    {
                    images.map( img =>(
                        <GifGridItem key = { img.id }  { ...img }/>
                    ))
                    }
            </div>
        </>
    )
}
 
GifGrid.propTypes={
    category: PropTypes.string.isRequired
}