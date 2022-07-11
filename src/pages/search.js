function search (){
    const search = document.querySelector('.search')
    search.innerHTML = `
        <form class = "srcForm">
        <label for="site-search">Search Location:</label>
        <input type="search" id="site-search" name="q">
        <input type="submit" class="srcBtn" value="Search">
        </form>`
        
        
}

export default search;