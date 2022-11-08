import {Link} from "react-router-dom";

export function Card({country}) {

    const {
        flags,
        name,
        population,
        region,
        capital
    } = country

    return (
        <>
            <Link to={`/countries/${name.official}`} state={country}>
                <article
                    className="
                    bg-white dark:bg-gray-800 flex flex-col sm:w-80
                    border border-solid border-gray-200 dark:border-gray-900 rounded shadow
                    hover:shadow-xl hover:cursor-pointer hover:scale-105
                    transition duration-300">
                    <img className="drop-shadow-xl"
                         src={flags.svg}
                         alt="{name}"
                    />
                    <div className="p-4 mb-8">
                        <h2 className="country-name my-4 font-bold text-xl dark:text-slate-200">{name.official}</h2>
                        <p className="mb-1 dark:text-slate-200"><span className="font-bold">Population:</span> {population.toLocaleString()}</p>
                        <p className="country-region mb-1  dark:text-slate-200"><span className="font-bold">Region: </span>{region}</p>
                        <p className="dark:text-slate-200"><span className="font-bold">Capital:</span> {capital}</p>
                    </div>
                </article>
            </Link>
        </>
    )
}