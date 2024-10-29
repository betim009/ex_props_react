import { Link } from "react-router-dom"
import Header from "../../components/header"
import ListPlaces from "../../components/ListPlaces"
import { casas, apartamentos, quartos } from "../../data/hospedagens"

export default function Places() {
    return (
        <div>
            <Header />
            <h2>Page Places</h2>

            <ListPlaces places={casas} />
        </div>
    )
}