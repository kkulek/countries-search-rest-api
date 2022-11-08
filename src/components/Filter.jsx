import {useEffect} from "react";

export function Filter() {

    useEffect(() => {
        const filter = document.getElementById('filter');

        filter.addEventListener('change', (e) => {
            const {value} = e.target;
            const countryRegion = document.querySelectorAll('.country-region');
            countryRegion.forEach((region) => {

                if (region.innerText.toLowerCase().includes(value.toLowerCase())) {
                    region.parentElement.parentElement.parentElement.style.display = 'flex'
                } else {
                    region.parentElement.parentElement.parentElement.style.display = 'none'
                }
            })
        })
    }, [])

    return (
        <>
            <select className="block shrink px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                name="region" id="filter" placeholder="test">
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