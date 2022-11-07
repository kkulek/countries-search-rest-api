export function Country({country, onClick}) {

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
        <div>
            <button
                className="mb-10 before:content-arrow font-bold"
                onClick={onClick}>Back
            </button>
            <div className="flex gap-10 flex-wrap">
                <img className="object-contain rounded drop-shadow-xl h-52 md:h-96"
                     src={flags.svg}
                     alt="{name}"
                />
                    <div className="mb-8">
                        <h2 className="mb-4 font-bold text-3xl">{name.official}</h2>
                        <p className="mb-1"><span className="font-bold">Native Name:</span> {name.common}</p>
                        <p className="mb-1"><span className="font-bold">Population:</span> {population.toLocaleString()}</p>
                        <p className="mb-1"><span className="font-bold">Region:</span> {region}</p>
                        <p className="mb-1"><span className="font-bold">Sub Region:</span> {subregion}</p>
                        <p className="mb-1"><span className="font-bold">Capital:</span> {capital}</p>
                        <p className="mb-1"><span className="font-bold">Top Level Domain:</span> {tld}</p>
                        <p className="mb-1"><span className="font-bold">Currencies:</span> {Object.keys(currencies).map((currency) => {
                            return (
                                <span>{currency} </span>
                            )
                        })}</p>
                        <p className="mb-1"><span className="font-bold">Languages:</span> {Object.values(languages).map((currency) => {
                            return (
                                <span>{currency} </span>
                            )
                        })}</p>
                    </div>
            </div>
        </div>
    )
}