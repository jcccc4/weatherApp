function buttonClick(){
    const searchClick = document.querySelector('.srcForm')
    searchClick.addEventListener('submit', (e) => {
        e.preventDefault();
        return e.target[0].value
    })
}

export default buttonClick;