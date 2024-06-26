class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               background-color: #2F4F4F;
           }
           :host {
               display: block;
               width: 100%;
               background-color: black;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h1 {
               padding: 16px;
               text-align: center;
           }
       </style>
       <h1>Restoran Makan Ges</h1>`;
    }
}

customElements.define("app-bar", AppBar);