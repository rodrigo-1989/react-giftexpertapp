import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';

describe('Pruevas en GifGrid Item', () => {
    const title = 'Un titulo';
    const url = 'https://localhots/algo.jpg';
    const wraper = shallow( <GifGridItem title = { title } url = { url }/> ); 

    test('Debe de mostrar el componenete correctamente', () => {

        expect ( wraper ).toMatchSnapshot();
        
    })
    test('Debe de tener un parrafo con el titulo', () => {
        const p  =  wraper.find('p');

        expect(p.text().trim()).toBe( title ) 
    })
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wraper.find( 'img' );
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title  );
    })
    test('Debe tener animate_fadeIn', () => {
        const div = wraper.find( 'div' );
        //console.log(div.prop('className'));
        const className = div.prop('className');
        expect( className.includes('') ).toBe( true );
        
    })
    
    
    
})

 