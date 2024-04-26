
import {Link} from 'react-router-dom'

export default function Post(){
    return(
        <div className="post">
        <div className="image">
          <Link to={`/`}>
            <img src= '/img/img0.PNG' alt=""/>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/`}>
            <h2>Mon CV</h2>
          </Link>
          <p className="info">
            <a href="/" className="author">Fono Colince</a>
            <time >2023-06-11 18:16</time>
          </p>
          <p className="summary">ici c'est paris</p>
        </div>
      </div>
    );
}