# Portfólio — Osvaldo Cruz

Site estático com meus projetos, habilidades e formas de contato.

🔗 **Ao vivo:**  
- `https://portfolio.automacoescruz.com.br` (domínio personalizado via Hostinger)  
- `https://osvaldocruz2013.github.io/Portfolio/` (fallback GitHub Pages)

---

## ✨ Funcionalidades
- Navbar fixa com **menu offcanvas** (abre pela direita e recolhe ao clicar).
- **Âncoras suaves** e compensação automática da altura da navbar.
- Seções com **paleta alternada** (escuro/médio/claro).
- Seção “Projetos” com **grid responsivo** (1/2/3 colunas) e **cards de altura igual**.
- Botões “Ver Projeto” e “Github” no **mesmo estilo pílula**.
- **Formulário de contato** usando [FormSubmit](https://formsubmit.co/), com honeypot e redirecionamento.
- SEO básico (title, description, keywords) e **favicon**.
- Deploy automático via **GitHub Pages**.

---

## 🛠️ Tecnologias
- **HTML5** – estrutura semântica  
- **CSS3** – estilos próprios em `styles/custom.css`  
- **Bootstrap 5.3** (CDN) – layout e componentes  
- **JavaScript** – comportamentos em `scripts/custom.js`  
- **Font Awesome** – ícones  
- **FormSubmit** – envio de formulário sem backend  
- **GitHub Pages** – hospedagem estática

---

## 📁 Estrutura do Projeto
├── index.html
├── CNAME
├── img/
│ ├── fotoatual.jpg
│ ├── CalculadoraCombustivel.png
│ ├── DashboardBI.png
│ └── PythonDados.png
├── scripts/
│ └── custom.js
├── styles/
│ ├── custom.css
│ └── obrigado.html # página de “Obrigado” (opcional)
├── .gitignore
├── requirements.txt
└── README.md


---

## ▶️ Como rodar localmente
**Opção 1 – Abrir o arquivo**  
Basta abrir `index.html` no navegador (duplo clique).

**Opção 2 – Servidor local rápido**
- Com Python:
  ```bash
  python -m http.server 5500
  # depois acesse http://localhost:5500

🚀 Deploy 


📨 Formulário

Serviço: FormSubmit (https://formsubmit.co/).



Redireciona para styles/obrigado.html com o nome via query string.

🔒 Observações de privacidade

Se algo sensível já foi comitado, veja a seção “Parar de versionar pastas já comitadas” abaixo.

© 2025 Osvaldo Cruz. Todos os direitos reservados.
(Se preferir licença aberta, troque por MIT e adicione um arquivo LICENSE.)