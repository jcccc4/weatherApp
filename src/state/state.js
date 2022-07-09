export const State = {
    state: {
        city: 'Cavite',
    },
    template(){
        return `
          <h1>Hello Vanilla JS!</h1>
          <div>
            Example of state management in Vanilla JS
          </div>
          <br />
          <h1 id="counter">${this.state.city}</h1>
          <button id="button">Increase</button>
        `
    },
    initialize(){
        console.log(this.template())
        document.querySelector('.content').innerHTML = this.template();
    }
}