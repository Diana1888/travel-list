import { useState } from "react";
import './App.css';
import { data } from "./data";


function Visit() {
    const [place, setPlace] = useState(data);

const removePlace = (id) =>{
    let newPlace = place.filter
    (place => place.id !==id);
    setPlace(newPlace)
}

const openInNewTab =(url) =>{
    window.open(url,  '_blank', 'noreferrer');
}

    return(
        <div>

            <div className="container">
                <h1>Toronto's Top {place.length} attractions</h1>
            </div>

            {place.map(element =>{
                const{id, destination, description, image, link} = element;
                return(
                    <div key={id}>
                    <div className="container">
                        <h2>{id} - {destination}</h2>
                    </div>
                    <div className="container">
                        <img src={image} width="100%" alt="pic"/>
                    </div>
                    <div className="container">
                        <p>{description}</p>
                    </div>
                    <div className="container">
                        <button className="btn-link" onClick={()=> openInNewTab(link)}>Official website</button>
                    </div>
                    <div className="container">
                        <button className="btn-click" onClick={() => removePlace(id)}>Remove attraction</button>

                    </div>
                   
                    </div>
                )
            })}
                    <div className="container">
                        <button className="btn-click" onClick={() => setPlace([])}>Delete All</button>
                    </div>
        </div>
    )
}

export default Visit;