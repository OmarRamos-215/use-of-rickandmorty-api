import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Http from '../../lib/request'
import './detailCharacter.css'

const DetailCharacter= () =>{
    const {idCharacter} = useParams()
    const [character, setCharacter]= useState({})
    const [origin, setOrigin]= useState({})
    const [location, setLocation]= useState({})

    useEffect(()=>{
        const fetchCharacter= async () =>{
            const character= await Http.instance.get_character(idCharacter)
            setCharacter(character)
            setOrigin(character.origin)
            setLocation(character.location)
        }
        fetchCharacter()
    })

    return(
        <React.Fragment>
            <div className='Character_container_detail'>
                <h1>{character.name}</h1>
                <div className='Character_image'>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className='Character_info'>
                    <div className='Data_row'>
                        <h3>Status: </h3>
                        <p>{character.status}</p>
                    </div>
                    <div className='Data_row'>
                        <h3>Specie: </h3>
                        <p>{character.species}</p>
                    </div>
                    <div className='Data_row'>
                        <h3>Origin: </h3>
                        <p>{origin.name}</p>
                    </div>
                    <div className='Data_row'>
                        <h3>Location: </h3>
                        <p>{location.name}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default DetailCharacter
