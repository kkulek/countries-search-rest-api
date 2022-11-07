import {useEffect} from "react";

export function Filter() {

    useEffect(() => {
        const filter = document.getElementById('filter');

        filter.addEventListener('change', (e) => {
            const {value} = e.target;
            const countryRegion = document.querySelectorAll('.country-region');
            countryRegion.forEach((region) => {

                if (region.innerText.toLowerCase().includes(value.toLowerCase())) {
                    region.parentElement.parentElement.style.display = 'flex'

                } else {
                    region.parentElement.parentElement.style.display = 'none'
                }
            })
        })
    }, [])

    return (
        <>
            <select name="region" id="filter" placeholder="test">
                <option value="" >Filter by region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="antarctic">Antarctic</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </>
    )
}