class MyInfo extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
		<div class="row">
			<img class="rounded-circle" src="assets/img/KienDo.jpg" style="width: 70%; height: auto">
		</div>

		<div class="row" style="padding-top: 0.6rem">
			<ul style="list-style-type: none; padding-left: 1rem">
				<li>
					Postdoctoral Research Fellow<br>
					A2I2, Deakin University<br>
				<li>
				<li>
					<i class="bi bi-file-person-fill" style="font-size: 0.85rem"></i>
					<a href="resources/CV_kiendo.pdf"> Curriculumn Vitae</a>
				</li>
				<li>
					<i class="bi bi-envelope-fill" style="font-size: 0.85rem"></i>
					<a href="mailto:hunken92(at)gmail(dot)com"> Email</a>
				</li>
				<li>
					<i class="bi bi-envelope-fill" style="font-size: 0.85rem"></i>
					<a href="mailto:k.do(at)deakin(dot)edu(dot)au"> Work Email</a>
				</li>
				<li>
					<i class="ai ai-google-scholar-square"></i>
					<a href="https://scholar.google.com/citations?user=aD6y8joAAAAJ&hl=en"> Google Scholar</a>
				</li>
				<li>
					<i class="bi bi-linkedin" style="font-size: 0.85rem"></i>
					<a href="https://www.linkedin.com/in/kien-do-b45846a4/"> LinkedIn</a>
				</li>
				<li>
					<i class="bi bi-twitter" style="font-size: 0.85rem"></i>
					<a href="https://twitter.com/kien_do_92"> Twitter</a>
				</li>
				<li>
					<i class="bi bi-github" style="font-size: 0.85rem"></i>
					<a href="https://github.com/clarken92"> Github</a>
				</li>
			</ul>
		</div>
    `;
  }
}

customElements.define('myinfo-component', MyInfo);