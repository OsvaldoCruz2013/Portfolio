// Atualiza --nav-h de acordo com a altura real da navbar (evita “pulos”)
function setNavHeightVar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const h = nav.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--nav-h', `${h}px`);
}
window.addEventListener('resize', setNavHeightVar);
document.addEventListener('DOMContentLoaded', setNavHeightVar);

// Fecha o menu ao clicar em um link (no mobile)
document.addEventListener('click', (e) => {
  const link = e.target.closest('.navbar a.nav-link');
  if (!link) return;
  const navbarCollapse = document.querySelector('.navbar-collapse.show');
  if (navbarCollapse) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
});

// Form de contato: define _next com o nome da pessoa para a página de obrigado
(() => {
  const form = document.querySelector('#contato form');
  if (!form) return;

  const next = document.getElementById('nextUrl');

  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // pega o nome digitado
    const nomeInput = form.querySelector('input[name="nome"]');
    const nome = (nomeInput?.value || '').trim();

    // monta a URL absoluta para a página de obrigado + query com nome
    const base = `${location.origin}/styles/obrigado.html`;
    const urlComNome = nome ? `${base}?nome=${encodeURIComponent(nome)}` : base;

    if (next) next.value = urlComNome;

    // deixa enviar (target=_blank abre nova aba) e limpa a atual
    setTimeout(() => form.reset(), 100);
  });
})();
