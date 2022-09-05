class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
			<div class="container">
				<a class="navbar-brand" href="/"><b>Kien Do</b></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="publications.html">Publications</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="professional_services.html">Professional Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="phd_application.html">PhD Application</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="supervision.html">Supervision</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="awards.html">Awards</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="https://k13nd0ai.home.blog">Blog Posts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    `;
  }
}

customElements.define('navbar-component', NavBar);