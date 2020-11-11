import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {
    const [categories,setCategories] = useState(['One piece']);
     
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorie = { setCategories } />
            <hr/>
            
            <ol>
                {
                    categories.map(  category =>( <GiftGrid 
                                                key  ={ category }
                                                category ={ category } />
                    )) 
                }
            </ol>
        </>
    )
}
