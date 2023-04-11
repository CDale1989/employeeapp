import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';




export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
            setNotFound(true);
        } else if(response.status === 401){
          navigate('/login')
        } else if(response.status === 500){
          setError(true)
        }
        if(!response.ok){
          setError(true)

          throw new Error("Something went wrong");
        }
        return response.json()
      })
      .then((data) => {
        setWord(data[0].meanings);
        
      })
      .catch((e) => {
        console.log(e.message);
      })
  },[]);

  if (notFound === true){ 
    return (
      <>
        <NotFound />
        
      </>  
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again?</p>
        <Link to="/dictionary">Search another definition</Link>
      </>
    );
  }
  return (
    <>
        {word ? (
         <div>
            <h1 className="definition-header">Here is a definition:</h1>
            {word.map((meaning) => {
              return (
                <p className="definition-result"
                  key={uuidv4()}>
                  {meaning.partOfSpeech + ": "}
                  <br />
                  {meaning.definitions[0].definition}
                </p>
              );

            })}
            <p>Search again:</p>
            <DefinitionSearch />
          </div>
        )  : null}
    </>
  );
}
