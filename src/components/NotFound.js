import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
      <>
        <p>The definition you were looking for was not found!</p>
        <br/>
        <Link to="/Dictionary">Search another</Link>
      </>
    ); 
}