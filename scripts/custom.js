
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
