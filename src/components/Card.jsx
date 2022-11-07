import {useState} from "react";
import Modal from "react-modal";
import {Country} from "./Country";

export function Card({country}) {
    const [countryIsOpen, setCountryIsOpen] = useState(false);

    const {
        flags,
        name,
        population,
        region,
        capital
    } = country

    const toggleModal = () => {
        setCountryIsOpen(!countryIsOpen)
    }

    return (
        <>
            <article onClick={toggleModal}
                     className="bg-white flex flex-col justify-center shrink-0 w-80 my-8 border border-solid border-gray-200 rounded shadow hover:shadow-xl hover:cursor-pointer transition-shadow duration-200">
                <img className="h-40 rounded drop-shadow-xl"
                     src={flags.svg}
                     alt="{name}"
                />
                <div className="p-4 mb-8">
                    <h2 className="country-name my-4 font-bold text-xl">{name.official}</h2>
                    <p className="mb-1"><span className="font-bold">Population:</span> {population.toLocaleString()}</p>
                    <p className="mb-1"><span className="font-bold">Region:</span> {region}</p>
                    <p><span className="font-bold">Capital:</span> {capital}</p>
                </div>
            </article>
            <Modal
                isOpen={countryIsOpen}
                onRequestClose={toggleModal}
            >
                <Country onClick={toggleModal} country={country}/>
            </Modal>
        </>
    )
}