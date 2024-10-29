import { Link, useParams } from "react-router-dom"
import { casas } from "../../data/hospedagens";


export default function Place() {
    const params = useParams();
    console.log(params)

    const findCasa = casas.find((e) => e.nome === params.nome);
    console.log(findCasa)

    if (!findCasa) {
        return <Link to='/'>Voltar ao inicio</Link>
    }

    return (
        <div>
            <h2>{findCasa.nome}</h2>
            <p>{findCasa.descricao}</p>
        </div>
    )
}