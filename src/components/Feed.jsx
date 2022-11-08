import {useEffect, useState} from "react";
import {Card} from "./Card";

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
                <section className="flex flex-wrap gap-12 my-8 justify-center sm:justify-start ">
                    {countries.map((country) => {
                        return (
                            <>
                                <Card country={country}/>
                            </>
                        )
                    })}
                </section>
            )}
        </>
    )
}