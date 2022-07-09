function search (){
    const search = document.querySelector('.search')
    search.innerHTML = `
        <label for="site-search">Search the site:</label>
        <input type="search" id="site-search" name="q">
        <button>Search</button>`
}

export default search;