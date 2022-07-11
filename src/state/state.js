import getCity from "../calls/getCity";

export const State = {
    state: {
      city: '',
    },
    template(){
        return `
          <h1>Hello This my Weather App!</h1>
        `
    },
    initialize(){
        console.log(this.template())
        document.querySelector('.content').innerHTML = this.template();
        this.buttonClick();
    },
    async buttonClick(){
      const searchClick = document.querySelector('.srcForm')
      searchClick.addEventListener('submit', (e) => {
          e.preventDefault();
          console.log( e.target[0].value)
          this.state.city = e.target[0].value;
          getCity(this.state.city).then(data => {
            console.log(data)
            this.updateData(data)
            
          }
          ).catch((e) => {
            console.log(e)
            document.querySelector('.formData').innerHTML = "No Location Found. Try again."
          })
          this.initialize();
      })  
    }, updateData(current){
      console.log(current)
      
      let word ="";

      for(const key of Object.keys(current)){
        word += `<div class = "datas">${key} : ${current[key]}</div>`;
      }
      document.querySelector('.formData').innerHTML = word
      
    },
}