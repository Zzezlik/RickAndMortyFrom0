const BASE_URL = "https://rickandmortyapi.com/api"
const

const load_chars = async function() {
    const download_chars = await fetch(`${BASE_URL}/character`)
        .then(res => res.json())
        .then(data => console.dir(data.results))
}
load_chars()

const renderOnPage = () => {

}