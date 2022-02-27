import React from 'react'
import './character.css'
import { Link } from 'react-router-dom'

const Character= (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <div className='Character_container'>
                <Link className='Character_link' to={ `/character/${character.id}` }>
                    <div className='Character_image'>
                            <img
                                src={character.image}
                                alt={character.name} />
                    
                    </div>
                    <div className='Character_info'>
                        <h3 className='Character_name'>{character.name}</h3>
                        <p className='Character_species'>{character.species}</p>
                        <p className='Character_status'>{character.status}</p>
                    
                    </div>
                </Link>
            </div>
            
            
        </React.Fragment>
    )
}

export default Character