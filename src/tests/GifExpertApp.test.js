import{ shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import React from 'react';
describe('Evalueando componente <GifExpertApp />', () => {
    test('deberia renderizar bien los componentes', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['naruto','One punch']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length ); 

    })
    
    
})