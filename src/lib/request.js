
const url= "https://rickandmortyapi.com/api/character/";

class Http{
    static instance= new Http()

    get_characters= async () =>{
        try{
            const request= await fetch(`${url}?page=21`)
            const response= await request.json()
            return response.results

        } catch (err) {
            return new Error(err)
        }
    }

    get_character= async(id) =>{
        try{
            const request= await fetch(`${url}${id}`)
            const response= await request.json()
            return response
            
        } catch (err) {
            return new Error(err)
        }
            
    }
    
}

export default Http;