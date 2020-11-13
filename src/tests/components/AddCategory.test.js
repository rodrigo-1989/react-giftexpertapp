import   { shallow  }  from  'enzyme';
import { AddCategory } from '../../components/AddCategory';
import React from 'react';

describe('Pruevas en el componente AddCategory', () => {
    const setCategorie = jest.fn();
    let wraper = shallow(<AddCategory setCategorie = { setCategorie }/>);

    //ciclo de vida para cada test 
    beforeEach(()=>{
        jest.clearAllMocks();
         wraper = shallow(<AddCategory setCategorie = { setCategorie }/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wraper ).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wraper.find('input');

        const value = 'Hola mundo';
        input.simulate( 'change' , { target:{ value } });

        expect( wraper.find('p').text().trim() ).toBe( value );
    });

    test('No debe de postaer la informacion con el submit ', () => {
        wraper.find('form').simulate('submit',{ preventDefault(){}});
        expect( setCategorie ).not.toHaveBeenCalled(); 
        
    });
    
    test('Debe de llamar setCategorie y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        //Simular el input change
        wraper.find('input').simulate( 'change' , { target:{ value } });
        //simular submit
        wraper.find('form').simulate('submit',{ preventDefault(){}});
        //Setcategorie debe ser llamado
        expect( setCategorie ).toHaveBeenCalled(); 
        //ver que la caja de texto quede limpia ''
        expect( wraper.find('input' ).prop( 'value' ) ).toBe( '' );
    })
    
    
    
})
