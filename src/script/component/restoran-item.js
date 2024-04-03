class MealsItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
                   background-color: white;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
                   border-radius: 10px;
                   overflow: hidden;
                   background-image: url(https://cdn-icons-png.flaticon.com/128/2276/2276931.png);
                   background-repeat: no-repeat;
                   background-blend-mode: multiply;
                   background-position: center;
               }
              
               .meals {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meals-info {
                   padding: 24px;
               }
              
               .meals-info > h2 {
                   font-weight: lighter;
               }
              
               .meals-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
           <img class="meals" src="${this._meals.strMealThumb}" alt="pic makanan">
           <div class="meals-info">
               <h2>${this._meals.strMeal}</h2>
               <p>${this._meals.strInstructions}</p>
           </div>`;
    }
}

customElements.define("meals-item", MealsItem);