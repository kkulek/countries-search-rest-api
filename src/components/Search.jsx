import {useEffect} from "react";

export function Search() {

    useEffect(() => {
        const search = document.getElementById('search');
        search.addEventListener('input', (e) => {
            const {value} = e.target;
            const countryName = document.querySelectorAll('.country-name');
            countryName.forEach((name) => {
                 if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
                    name.parentElement.parentElement.style.display = 'flex'
                } else {
                    name.parentElement.parentElement.style.display = 'none'
                }
            })
        })
    }, [])

    return (
        <>
            <form>
                <input type="search"
                       id="search"
                       placeholder="Search for a country"
                       className="block w-full sm:w-96 shrink px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
            </form>
        </>
    )
}