// ============================================================
// DADOS DOS MÓDULOS
// ============================================================
const dadosModulos = [{
    id: 'pb',
    nome: 'Paraíba',
    sigla: 'PB',
    tipo: 'producao',
    icon: '⛰️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Almoxarifado', link: '#' },
        { nome: 'Compra Direta', link: '#' },
        { nome: 'Licitação', link: '#' },
        { nome: 'BI', link: '#' },
        { nome: 'Keycloak', link: '#' }
    ]
}, {
    id: 'es',
    nome: 'Espírito Santo',
    sigla: 'ES',
    tipo: 'producao',
    icon: '🌊',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Almoxarifado', link: '#' },
        { nome: 'Compra Direta', link: '#' },
        { nome: 'BI', link: '#' },
        { nome: 'Keycloak', link: '#' }
    ]
}, {
    id: 'sc',
    nome: 'Santa Catarina',
    sigla: 'SC',
    tipo: 'producao',
    icon: '🏖️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Patrimônio Mobiliário', link: '#' },
        { nome: 'Setup', link: '#' },
        { nome: 'Keycloak', link: '#' }
    ]
}, {
    id: 'ms',
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    tipo: 'producao',
    icon: '🌿',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Contratos', link: '#' },
        { nome: 'Licitação', link: '#' },
        { nome: 'ARP', link: 'https://www.siga.ms.gov.br/ata-registro-preco' },
        { nome: 'SGC', link: '#' },
        { nome: 'BI', link: '#' }
    ]
}, {
    id: 'mt',
    nome: 'Mato Grosso',
    sigla: 'MT',
    tipo: 'producao',
    icon: '🏞️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Compras Preparação', link: '#' },
        { nome: 'Licitação', link: '#' },
        { nome: 'Keycloak', link: '#' }
    ]
}, {
    id: 'tce',
    nome: 'Tribunal de Contas',
    sigla: 'TCE',
    tipo: 'producao',
    icon: '⚖️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Plano de Compras', link: '#' },
        { nome: 'Flowbee', link: '#' },
        { nome: 'BI', link: '#' }
    ]
}, {
    id: 'to',
    nome: 'Tocantins',
    sigla: 'TO',
    tipo: 'producao',
    icon: '🌅',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Almoxarifado', link: '#' },
        { nome: 'SGC', link: '#' },
        { nome: 'Setup', link: '#' }
    ]
}, {
    id: 'ap',
    nome: 'Amapá',
    sigla: 'AP',
    tipo: 'producao',
    icon: '🌴',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'BI', link: '#' },
        { nome: 'Patrimônio Mobiliário', link: '#' },
        { nome: 'Keycloak', link: '#' }
    ]
}, {
    id: 'homms',
    nome: 'Homologação MS',
    sigla: 'HOM-MS',
    tipo: 'homologacao',
    icon: '🧪',
    desc: 'Ambiente de homologação',
    sistemas: [
        { nome: 'Efornecedor (Hom)', link: '#' },
        { nome: 'Setup (Hom)', link: '#' },
        { nome: 'Catálogo (Hom)', link: '#' },
        { nome: 'BASE 1 Compras', link: '#' }
    ]
}, {
    id: 'homaz',
    nome: 'Homologação AZ',
    sigla: 'HOM-AZ',
    tipo: 'homologacao',
    icon: '🔄',
    desc: 'Ambiente de homologação',
    sistemas: [
        { nome: 'Efornecedor (Hom)', link: '#' },
        { nome: 'Setup (Hom)', link: '#' },
        { nome: 'Catálogo (Hom)', link: '#' },
        { nome: 'Plano de Compras (Hom)', link: '#' }
    ]
}, {
    id: 'links',
    nome: 'Links Úteis',
    sigla: 'LNK',
    tipo: 'links',
    icon: '🔗',
    desc: 'Links e ferramentas',
    sistemas: [
        { nome: 'Wiki AZ', link: '#' },
        { nome: 'Redmine', link: '#' },
        { nome: 'Dashboard', link: '#' },
        { nome: 'Contatos', link: '#' }
    ]
}, {
    id: 'pmcg',
    nome: 'PMCG',
    sigla: 'PMCG',
    tipo: 'producao',
    icon: '🏙️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Almoxarifado', link: '#' },
        { nome: 'Compra Direta', link: '#' },
        { nome: 'BI', link: '#' }
    ]
}, {
    id: 'ma',
    nome: 'Maranhão',
    sigla: 'MA',
    tipo: 'producao',
    icon: '🏝️',
    desc: 'Ambiente de produção',
    sistemas: [
        { nome: 'Efornecedor', link: '#' },
        { nome: 'Catálogo', link: '#' },
        { nome: 'Contratos', link: '#' },
        { nome: 'Licitação', link: '#' },
        { nome: 'SGC', link: '#' }
    ]
}];

// ============================================================
// VARIÁVEIS
// ============================================================
let filtroAtual = 'todos';
let buscaAtual = '';

// ============================================================
// ELEMENTOS DOM
// ============================================================
const grid = document.getElementById('modulosGrid');
const searchInput = document.getElementById('searchInput');
const filtrosBotoes = document.querySelectorAll('.filtros-botoes button');
const resultCount = document.getElementById('resultCount');

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalIcon = document.getElementById('modalIcon');
const modalNome = document.getElementById('modalNome');
const modalSigla = document.getElementById('modalSigla');
const modalSistemas = document.getElementById('modalSistemas');

// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

// ============================================================
// FUNÇÃO PARA RENDERIZAR OS CARDS
// ============================================================
function renderizarModulos() {
    let filtrados = filtroAtual === 'todos' ?
        dadosModulos :
        dadosModulos.filter(m => m.tipo === filtroAtual);

    if (buscaAtual.trim() !== '') {
        const termo = buscaAtual.toLowerCase().trim();
        filtrados = filtrados.filter(m =>
            m.nome.toLowerCase().includes(termo) ||
            m.sigla.toLowerCase().includes(termo) ||
            m.desc.toLowerCase().includes(termo)
        );
    }

    resultCount.textContent = `${filtrados.length} módulo${filtrados.length !== 1 ? 's' : ''}`;

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="emoji">🔍</span>
                Nenhum módulo encontrado
            </div>
        `;
        return;
    }

    grid.innerHTML = filtrados.map(modulo => `
        <div class="modulo-card" onclick="abrirModal('${modulo.id}')">
            <span class="badge-tipo ${modulo.tipo}">${modulo.tipo}</span>
            <span class="icon">${modulo.icon}</span>
            <div class="nome">${modulo.nome}</div>
            <div class="sigla">${modulo.sigla}</div>
            <div class="count-sistemas">${modulo.sistemas.length} sistemas</div>
        </div>
    `).join('');
}

// ============================================================
// FUNÇÃO PARA ABRIR MODAL
// ============================================================
function abrirModal(id) {
    const modulo = dadosModulos.find(m => m.id === id);
    if (!modulo) return;

    modalIcon.textContent = modulo.icon;
    modalNome.textContent = modulo.nome;
    modalSigla.textContent = modulo.sigla;

    modalSistemas.innerHTML = modulo.sistemas.map(sistema => `
        <div class="sistema-item">
            <span class="nome-sistema">
                <strong>▸</strong> ${sistema.nome}
            </span>
            <a href="${sistema.link}" class="link-acesso" target="_blank">
                ↗ Acessar
            </a>
        </div>
    `).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================================
// FUNÇÃO PARA FECHAR MODAL
// ============================================================
function fecharModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================================
// MODO RETRO / AZ
// ============================================================
const toggleTheme = document.getElementById('toggleTheme');
const themeLabel = document.getElementById('themeLabel');
const themeBadge = document.getElementById('themeBadge');
const themeThumb = document.getElementById('themeThumb');

function toggleModo() {
    if (document.body.classList.contains('az-mode')) {
        // Volta para RETRO
        document.body.classList.remove('az-mode');
        document.body.classList.add('retro-mode');
        themeLabel.textContent = '🌙';
        themeBadge.textContent = 'RETRO';
        themeThumb.textContent = '';
        localStorage.setItem('tema-modulos', 'retro');
    } else {
        // Vai para AZ
        document.body.classList.remove('retro-mode');
        document.body.classList.add('az-mode');
        themeLabel.textContent = '🏢';
        themeBadge.textContent = 'AZ';
        themeThumb.textContent = 'AZ';
        localStorage.setItem('tema-modulos', 'az');
    }
}

toggleTheme.addEventListener('click', toggleModo);

// Carregar tema salvo
const temaSalvo = localStorage.getItem('tema-modulos');
if (temaSalvo === 'az') {
    document.body.classList.add('az-mode');
    themeLabel.textContent = '🏢';
    themeBadge.textContent = 'AZ';
    themeThumb.textContent = 'AZ';
} else {
    document.body.classList.add('retro-mode');
    themeLabel.textContent = '🌙';
    themeBadge.textContent = 'RETRO';
    themeThumb.textContent = '';
}

// ============================================================
// MENU TOGGLE (Mobile)
// ============================================================
menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
});

// Fechar menu ao clicar fora (Mobile)
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 992) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('open');
        }
    }
});

// ============================================================
// EVENTOS - BUSCA
// ============================================================
searchInput.addEventListener('input', function () {
    buscaAtual = this.value;
    renderizarModulos();
});

// ============================================================
// EVENTOS - FILTROS
// ============================================================
filtrosBotoes.forEach(btn => {
    btn.addEventListener('click', function () {
        filtrosBotoes.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filtroAtual = this.dataset.filtro;
        renderizarModulos();
    });
});

// ============================================================
// EVENTOS - MODAL
// ============================================================
modalClose.addEventListener('click', fecharModal);
modalCloseBtn.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) fecharModal();
});

// ============================================================
// TECLA ESC FECHA MODAL
// ============================================================
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fecharModal();
});

// ============================================================
// INICIAR
// ============================================================
renderizarModulos();

console.log('🚀 Dashboard de Módulos AZ carregado!');
console.log(`📦 ${dadosModulos.length} módulos disponíveis`);
console.log('💡 Clique em um módulo para ver os detalhes');
console.log('🔍 Use a busca ou filtros para encontrar módulos');