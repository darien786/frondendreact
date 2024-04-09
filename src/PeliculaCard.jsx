import React from "react";
import { Link } from "react-router-dom";

function PeliculaCard({pelicula}){
    return (
        <div className="movie">
            <div>
                <p>
                    <p>{pelicula.anio}</p>
                </p>
            </div>
                
            <div>
                <Link to={`detalles/${pelicula.peliculaId}`}>
                    <img src={pelicula.poster !== 'N/A' ? pelicula.poster : 'https://via.placeholder.com/400'} alt={pelicula.titulo} />
                </Link>
            </div>

            <div>
                <span>PELÍCULA</span>
                <h3>{pelicula.titulo}</h3>
            </div>
        </div>
    );
}

export default PeliculaCard;