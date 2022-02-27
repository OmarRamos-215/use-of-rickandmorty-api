import React from 'react';
import Character from '../../Components/character/character'
import './home.css'
import Http from '../../lib/request'

const URL= "https://rickandmortyapi.com/api/character/"

class Home extends React.Component {
    state={
        title: "React Example with Rick and Morty API",
        characters: []
    }

    componentDidMount= () =>{
        this.get_data(URL);
    }

    get_data= async() =>{
        const response= await Http.instance.get_characters()
        this.setState({ characters: response })
    }

    render(){
        return (
            <React.Fragment>
                <div className='Title_container'>
                <h1>{this.state.title}</h1>
                <hr/>
                </div>
                {this.state.characters.map((character) =>{
                    return <Character character={character} />
                })}
            </React.Fragment>
        )
    }
}

export default Home;