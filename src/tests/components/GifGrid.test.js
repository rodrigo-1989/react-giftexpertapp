import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom'
jest.mock("../../hooks/useFetchGifs")
describe("Pruevas en el <GifGrid />", () => {

  const category = "One Punch";

  test("Debe de mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue( {
      data:[],
      loading:true
    });

    const wraper = shallow(<GifGrid category={category} />);
    expect( wraper ).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imagenes', () => {
    const gifs = [{
      id:'ABC',
      url:'https://localhost/cualquier/cosa.png',
      title:'cualquier cosa'
    },{
      id:'123',
      url:'https://localhost/cualquier/cosa.png',
      title:'cualquier cosa'
    }]
    useFetchGifs.mockReturnValue( {
      data:gifs,
      loading:true
    });
    const wrapper = shallow(<GifGrid category={category} />);
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find( 'p' ).exists() ).toBe( false );

    expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );
     
  })
  

});
