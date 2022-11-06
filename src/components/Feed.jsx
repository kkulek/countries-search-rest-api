import {useEffect, useState} from "react";

export function Feed() {
    const [countries, setCountries] = useState([]);

    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, []);

    return (
        <>
            {!countries.length ? null : (
                <div>
                    {countries.map((country) => {
                        const {
                            flags,
                            name,
                            population,
                            region,
                            capital
                        } = country
                        return (
                            <article className="my-8">
                                <img src={flags.svg} alt="{name}"/>
                                <h2>{name.official}</h2>
                                <p>Population: {population}</p>
                                <p>Region: {region}</p>
                                <p>Capital: {capital}</p>
                            </article>
                        )
                    })}
                </div>
            )}
        </>
    )
}