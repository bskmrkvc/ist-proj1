import { Link } from 'react-router-dom';
import errorPicture from '../../assets/img/error.jpg';

function Error() {
    return (
      <div className="App">
        <h1 style={{marginTop: '30px'}}>Greska, stranica nije pronadjena!</h1>  
        <img src={errorPicture} alt="Error!" style={{width: '30%'}}></img><br/>
        <h3><Link to='/' style={{ color: '#000' }}>Nazad na pocetnu.</Link></h3>
      </div>
    );
  }
  
  export default Error;