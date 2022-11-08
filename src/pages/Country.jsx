import {Link, useLocation} from 'react-router-dom';
import {useEffect} from "react";

export function CountryPage() {
    const location = useLocation();
    const country = location.state;

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "instant",
        })
    }, [])


    const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages
    } = country

    return (
        <>
            <Link to="/" className="inline-block px-6 py-1 mb-10 shadow rounded
            bg-white dark:bg-gray-800 dark:text-slate-200
            hover:bg-gray-800 dark:hover:bg-white hover:dark:text-black hover:text-slate-200
            duration-500"
            >Back</Link>

            <div className="flex md:gap-10 flex-wrap h-screen">
                <img className="object-contain rounded drop-shadow-xl h-52 md:h-96"
                     src={flags.svg}
                     alt={name.official + ` flag`}
                />
                <div className="mb-8">
                    <h2 className="mb-4 font-bold text-3xl dark:text-slate-200">{name.official}</h2>
                    <p className="mb-1 dark:text-slate-200"><span
                        className="font-bold">Native Name:</span> {name.common}</p>
                    <p className="mb-1 dark:text-slate-200"><span
                        className="font-bold">Population:</span> {population.toLocaleString()}</p>
                    <p className="mb-1 dark:text-slate-200"><span className="font-bold">Region:</span> {region}</p>
                    <p className="mb-1 dark:text-slate-200"><span className="font-bold">Sub Region:</span> {subregion}
                    </p>
                    <p className="mb-1 dark:text-slate-200"><span className="font-bold">Capital:</span> {capital}</p>
                    <p className="mb-1 dark:text-slate-200"><span className="font-bold">Top Level Domain:</span> {tld}
                    </p>
                    <p className="mb-1 dark:text-slate-200"><span
                        className="font-bold">Currencies:</span> {Object.keys(currencies).map((currency) => {
                        return (
                            <span>{currency} </span>
                        )
                    })}</p>
                    <p className="mb-1 dark:text-slate-200"><span
                        className="font-bold">Languages:</span> {Object.values(languages).map((language) => {
                        return (
                            <span>{language} </span>
                        )
                    })}</p>
                </div>
            </div>
        </>
    )
}