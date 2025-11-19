
function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth'
    });
}

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToElement(targetId);
    });
});
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    sidebar.classList.toggle('active');

    // Detecta clique fora
    function handleClickOutside(e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('active');
            document.removeEventListener('click', handleClickOutside);
        }
    }

    // Só adiciona o listener quando o menu é aberto
    if (sidebar.classList.contains('active')) {
        setTimeout(() => { // pequena espera para não fechar no mesmo clique
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
}

const servicoSelect = document.getElementById("servico");
const planoSelect = document.getElementById("plano");

const planos = {
    sites: [
        "Essencial Online",
        "Professional Plus",
        "Expansão Digital"
    ],
    automacoes: [
        "Automação de Vendas",
        "Sistema para Comércio",
        "Automação de Agendamento"
    ]
};

servicoSelect.addEventListener("change", () => {
    const value = servicoSelect.value;

    planoSelect.innerHTML = "<option value=''>Selecione o plano</option>";
    planoSelect.disabled = true;

    if (value && planos[value]) {
        planos[value].forEach(p => {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p;
            planoSelect.appendChild(opt);
        });

        planoSelect.disabled = false;
    }
});


const urlParams = new URLSearchParams(window.location.search);

const preServico = urlParams.get("servico");
const prePlano = urlParams.get("plano");

if (preServico) {
    servicoSelect.value = preServico;
    servicoSelect.dispatchEvent(new Event("change")); // carrega planos automaticamente
}

if (prePlano) {
    setTimeout(() => {
        planoSelect.value = prePlano;
    }, 200);
}

