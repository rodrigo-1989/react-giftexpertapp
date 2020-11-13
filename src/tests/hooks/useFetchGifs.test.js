import { wait } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruevas en el hook useFetchGifs', () => {
    test('Debe de etornal el estado inicial',async () => {
       // const { data,loading } = useFetchGifs( 'One Punch' );
       //console.log(data,loading)
       const { result,waitForNextUpdate }  = renderHook( ()=> useFetchGifs( 'One Punch' ) );
       const { data,loading } = result.current;
       
       await waitForNextUpdate();
       
       expect( data ).toEqual([]);
       expect( loading ).toBe( true );
        
    });
    test('Debe de retornar un arreglo de imagenes y el loadisng en false',async () => {
        const { result,waitForNextUpdate }  = renderHook( ()=> useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();
        const { data,loading } = result.current;
       
       expect( data.length ).toEqual( 10 );
       expect( loading ).toBe( false );
    })
    
    
});
