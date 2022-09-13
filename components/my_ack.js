class MyAck extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
		<div id="kd_ack" style="margin-top: 2rem; text-align: right; font-size: 0.7rem">
			<span>Inspired by Dr. Kien Do's <a target="_blank" href="https://clarken92.github.io/">website</a></span>
		</div>
    `;
  }
}

customElements.define('myack-component', MyAck);