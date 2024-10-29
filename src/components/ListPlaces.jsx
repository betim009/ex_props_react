import { Link } from "react-router-dom";

export default function ListPlaces({ places }) {
    return (
        <div>
            {places.map((e) => (
                <div>
                    <h2>{e.nome}</h2>
                    <Link to={`/place/${e.nome}`}>Conhecer a hospedagem</Link>
                </div>
            ))}
        </div>
    )
}