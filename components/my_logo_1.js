class MyLogo1 extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
		<div class="d-flex justify-content-center">
			<img src="assets/img/KD-logo-2.png" style="width: 10%; height: auto" alt="My logo" >
		</div>
    `;
  }
}

customElements.define('mylogo1-component', MyLogo1);