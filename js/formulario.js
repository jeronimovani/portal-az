$(document).ready(function () {
    // ============================
    // CONFIGURAÇÕES INICIAIS
    // ============================
    const CONFIG = {
        MAX_HISTORICO: 20
    };

    const historico = JSON.parse(localStorage.getItem('historicoTextos')) || [];

    // ============================
    // UI - ESTRELAS
    // ============================
    createStars();

    // ============================
    // SIDEBAR
    // ============================
    // ============================
    // SIDEBAR - HOVER + TOGGLE (JQUERY)
    // ============================

    $(document).ready(function () {
        const sidebar = $('.sidebar');
        const menuToggle = $('.menu-toggle');
        const closeSidebar = $('.close-sidebar');
        const sidebarIndicator = $('.sidebar-indicator');

        function isMobile() {
            return window.innerWidth <= 700 || 'ontouchstart' in window;
        }

        // ============================
        // MOBILE - TOGGLE
        // ============================
        if (isMobile()) {
            menuToggle.show();
            closeSidebar.show();
            sidebar.css('left', '');

            // Abrir/fechar
            menuToggle.click(function () {
                sidebar.toggleClass('open');
            });

            // Fechar
            closeSidebar.click(function () {
                sidebar.removeClass('open');
            });

            // Fechar ao clicar fora
            $(document).click(function (e) {
                if (sidebar.hasClass('open')) {
                    if (!sidebar.is(e.target) && !sidebar.has(e.target).length &&
                        !menuToggle.is(e.target) && !menuToggle.has(e.target).length) {
                        sidebar.removeClass('open');
                    }
                }
            });

        } else {
            // ============================
            // DESKTOP - HOVER
            // ============================
            menuToggle.hide();
            closeSidebar.hide();
            sidebar.css('left', '-280px');

            // Abrir ao passar mouse na borda esquerda
            $(document).on('mousemove', function (e) {
                if (e.clientX <= 30 && !sidebar.is(':hover')) {
                    sidebar.css('left', '0');
                }
            });

            // Fechar ao tirar o mouse
            sidebar.on('mouseleave', function () {
                setTimeout(() => {
                    if (!sidebar.is(':hover')) {
                        sidebar.css('left', '-280px');
                    }
                }, 300);
            });

            // Manter aberta
            sidebar.on('mouseenter', function () {
                sidebar.css('left', '0');
            });

            // Indicador
            if (sidebarIndicator.length) {
                sidebar.on('mouseenter', function () {
                    sidebarIndicator.css('opacity', '0');
                });
                sidebar.on('mouseleave', function () {
                    sidebarIndicator.css('opacity', '1');
                });
            }
        }

        // ============================
        // ATUALIZAR AO REDIMENSIONAR
        // ============================
        $(window).resize(function () {
            if (isMobile()) {
                sidebar.css('left', '');
                menuToggle.show();
                closeSidebar.show();
            } else {
                sidebar.css('left', '-280px');
                menuToggle.hide();
                closeSidebar.hide();
                sidebar.removeClass('open');
            }
        });
    });

    // ============================
    // SISTEMA DE CONTATOS - POP-UP (CONSULTA E CÓPIA)
    // ============================

    // Dados dos contatos (edite aqui para adicionar/remover manualmente)
    const contatosData = {
        publicos: [
            { id: 1, nome: 'SUPORTE TÉCNICO', telefone: '(11) 4002-8922', ramal: '1234', email: 'suporte@empresa.com' },
            { id: 2, nome: 'SAC - ATENDIMENTO', telefone: '0800 123 4567', ramal: '', email: 'sac@empresa.com' },
            { id: 3, nome: 'OUVIDORIA', telefone: '(11) 4002-8922', ramal: '5678', email: 'ouvidoria@empresa.com' },
            { id: 4, nome: 'VENDAS', telefone: '(11) 4002-8922', ramal: '9012', email: 'vendas@empresa.com' },
            { id: 5, nome: 'CENTRAL DE RELACIONAMENTO', telefone: '0800 000 0000', ramal: '', email: 'relacionamento@empresa.com' },
        ],
        restritos: [
            { id: 6, nome: 'GERÊNCIA DE TI', telefone: '(11) 4002-8922', ramal: '9999', email: 'ti@empresa.com' },
            { id: 7, nome: 'RH - RECURSOS HUMANOS', telefone: '(11) 4002-8922', ramal: '8888', email: 'rh@empresa.com' },
            { id: 8, nome: 'FINANCEIRO', telefone: '(11) 4002-8922', ramal: '7777', email: 'financeiro@empresa.com' },
            { id: 9, nome: 'DIRETORIA', telefone: '(11) 4002-8922', ramal: '6666', email: 'diretoria@empresa.com' },
            { id: 10, nome: 'CONTROLE INTERNO', telefone: '(11) 4002-8922', ramal: '5555', email: 'controle@empresa.com' },
        ]
    };

    // ============================
    // RENDERIZAR CONTATOS
    // ============================
    function renderizarTelefones() {
        const gridPublico = document.getElementById('telefones-publicos');
        const gridRestrito = document.getElementById('telefones-restritos');

        gridPublico.innerHTML = '';
        gridRestrito.innerHTML = '';

        // Contatos Públicos
        if (contatosData.publicos.length === 0) {
            gridPublico.innerHTML = '<div class="telefone-vazio">📭 NENHUM CONTATO PÚBLICO CADASTRADO</div>';
        } else {
            contatosData.publicos.forEach(contato => {
                gridPublico.appendChild(criarCardContato(contato, 'publico'));
            });
        }

        // Contatos Restritos
        if (contatosData.restritos.length === 0) {
            gridRestrito.innerHTML = '<div class="telefone-vazio">🔒 NENHUM CONTATO RESTRITO CADASTRADO</div>';
        } else {
            contatosData.restritos.forEach(contato => {
                gridRestrito.appendChild(criarCardContato(contato, 'restrito'));
            });
        }
    }

    // ============================
    // CRIAR CARD DE CONTATO (COM TELEFONE E E-MAIL)
    // ============================
    function criarCardContato(contato, tipo) {
        const div = document.createElement('div');
        div.className = `telefone-card ${tipo}`;
        div.dataset.id = contato.id;

        const numeroFormatado = contato.telefone || 'NÃO INFORMADO';
        const ramalTexto = contato.ramal ? `RAMAL: ${contato.ramal}` : '';
        const emailTexto = contato.email || '';

        // Criar elemento de toast para feedback de cópia
        const toast = document.createElement('div');
        toast.className = 'copiado-toast';
        toast.textContent = '📋 COPIADO!';
        div.appendChild(toast);

        div.innerHTML += `
        <div class="telefone-info">
            <span class="telefone-nome">${contato.nome}</span>
            <span class="telefone-numero">📞 ${numeroFormatado}</span>
            ${ramalTexto ? `<span class="telefone-ramal">📌 ${ramalTexto}</span>` : ''}
            ${emailTexto ? `<span class="telefone-email">✉️ ${emailTexto}</span>` : ''}
        </div>
        <div class="contato-acoes">
            <button class="btn-copiar" data-tipo="telefone" title="Copiar telefone">📞</button>
            ${emailTexto ? `<button class="btn-copiar" data-tipo="email" title="Copiar e-mail">✉️</button>` : ''}
        </div>
    `;

        // Evento: Copiar telefone ou e-mail
        const botoesCopiar = div.querySelectorAll('.btn-copiar');
        const toastElement = div.querySelector('.copiado-toast');

        botoesCopiar.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const tipo = this.dataset.tipo;
                let textoCopiar = '';

                if (tipo === 'telefone') {
                    const numero = contato.telefone || '';
                    const nome = contato.nome || '';
                    textoCopiar = `${nome}: ${numero}${contato.ramal ? ` (Ramal: ${contato.ramal})` : ''}`;
                } else if (tipo === 'email') {
                    const email = contato.email || '';
                    const nome = contato.nome || '';
                    textoCopiar = `${nome}: ${email}`;
                }

                // Copiar para área de transferência
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textoCopiar).then(() => {
                        mostrarFeedbackCopia(toastElement);
                    }).catch(() => {
                        copiarFallback(textoCopiar, toastElement);
                    });
                } else {
                    copiarFallback(textoCopiar, toastElement);
                }
            });
        });

        return div;
    }

    // ============================
    // FUNÇÕES DE CÓPIA
    // ============================
    function copiarFallback(texto, toastElement) {
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        mostrarFeedbackCopia(toastElement);
    }

    function mostrarFeedbackCopia(toastElement) {
        toastElement.classList.add('show');
        setTimeout(() => {
            toastElement.classList.remove('show');
        }, 1500);
    }

    // ============================
    // ABRIR/FECHAR POP-UP
    // ============================
    function abrirPopupTelefones() {
        const popup = document.getElementById('telefone-popup');
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        renderizarTelefones();
    }

    function fecharPopupTelefones() {
        const popup = document.getElementById('telefone-popup');
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ============================
    // EVENTOS DO POP-UP
    // ============================

document.querySelectorAll('.nav-item').forEach(item => {
    if (item.textContent.trim().includes('CONTATOS')) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            abrirPopupTelefones();
        });
    }
});

// Fechar pop-up
document.getElementById('fecharTelefone').addEventListener('click', fecharPopupTelefones);
document.getElementById('fecharTelefoneBtn').addEventListener('click', fecharPopupTelefones);

// Fechar ao clicar no overlay
document.querySelector('.popup-overlay')?.addEventListener('click', fecharPopupTelefones);

    // ============================
    // TECLA ESC FECHA POP-UP
    // ============================
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const popup = document.getElementById('telefone-popup');
            if (popup.style.display === 'flex') {
                fecharPopupTelefones();
            }
        }
    });

    // ============================
    // INICIALIZAR
    // ============================
    console.log('📋 Sistema de contatos carregado!');
    console.log('📝 Para editar os contatos, altere o array "contatosData" no JavaScript.');

    // ============================
    // MÁSCARAS
    // ============================
    $('#telefone').mask('000000000000');
    $('#cpf').mask('00000000000');
    $('#cnpj').mask('00.000.000/0000-00');

    // ============================
    // CAMPOS CONDICIONAIS
    // ============================
    $('#tipo').change(function () {
        const tipo = $(this).val();
        $('#fornecedor-fields').toggle(tipo === 'fornecedor');
        $('#servidor-fields').toggle(tipo === 'servidor');

        if (tipo === 'usuario') {
            showToast('ESTE TIPO SÓ PREENCHA NOME, TELEFONE E CONTATOS!');
        }
    });

    // ============================
    // CONTADOR DE CARACTERES
    // ============================
    $('#textoAssunto').on('input', function () {
        const max = parseInt($(this).attr('maxlength'));
        const current = $(this).val().length;
        $('#contador').text(`${current}/${max} CARACTERES`);
    });

    // ============================
    // FUNÇÃO PRINCIPAL - GERAR TEXTO
    // ============================
    $('#gerarTexto').click(function () {
        const dados = obterDadosFormulario();

        if (!validarDados(dados)) return;

        const resultado = gerarTextoFormatado(dados);
        salvarNoHistorico(resultado);

        $('#resultado').val(resultado);
        showToast('✅ TEXTO GERADO COM SUCESSO!');
    });

    // ============================
    // FUNÇÕES AUXILIARES - DADOS
    // ============================
    function obterDadosFormulario() {
        return {
            tipo: $('#tipo').val(),
            nome: $('#nome').val().trim(),
            email: $('#email').val().trim(),
            telefone: $('#telefone').val().trim(),
            processo: $('#processo').val().trim() || 'NÃO POSSUI',
            modulo: $('#modulo').val(),
            assunto: $('#assunto').val().trim(),
            textoAssunto: $('#textoAssunto').val().trim(),
            cnpj: $('#cnpj').val().trim(),
            razaoSocial: $('#razaoSocial').val().trim(),
            cpf: $('#cpf').val().trim(),
            orgao: $('#orgao').val().trim()
        };
    }

    function validarDados(dados) {
        if (!dados.tipo) {
            showToast('SELECIONE O TIPO DE USUÁRIO');
            return false;
        }

        if (!dados.nome || !dados.email || !dados.telefone) {
            showToast('PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS');
            return false;
        }

        if (dados.tipo === 'fornecedor') {
            if (!dados.cnpj || !dados.razaoSocial) {
                showToast('INFORME CNPJ E RAZÃO SOCIAL');
                return false;
            }
        }

        if (dados.tipo === 'servidor') {
            if (!dados.cpf || !dados.orgao) {
                showToast('INFORME CPF E ÓRGÃO');
                return false;
            }
        }

        if (!dados.modulo) {
            showToast('SELECIONE UM MÓDULO');
            return false;
        }

        return true;
    }

    // ============================
    // FUNÇÃO PRINCIPAL - FORMATAR TEXTO
    // ============================
    function gerarTextoFormatado(dados) {
        const { tipo, nome, email, telefone, processo, modulo, assunto, textoAssunto, cnpj, razaoSocial, cpf, orgao } = dados;

        let resultado = '';

        // CABEÇALHO - COM 3 "===" DE CADA LADO
        resultado += `=== DADOS DO ${tipo.toUpperCase()} ===\n\n`;

        // DADOS PESSOAIS
        resultado += `• NOME: ${nome}\n`;
        resultado += `• E-MAIL: ${email}\n`;
        resultado += `• TELEFONE: ${telefone}\n`;

        // DADOS ESPECÍFICOS
        if (tipo === 'fornecedor') {
            resultado += `• CNPJ: ${cnpj}\n`;
            resultado += `• RAZÃO SOCIAL: ${razaoSocial}\n`;
        } else if (tipo === 'servidor') {
            resultado += `• CPF: ${cpf}\n`;
            resultado += `• ÓRGÃO: ${orgao}\n`;
        }

        resultado += `\n`;

        // DADOS FUNCIONAIS - COM 3 "===" DE CADA LADO
        resultado += `=== DADOS FUNCIONAIS ===\n\n`;
        resultado += `• MÓDULO: ${getNomeModulo(modulo)}\n`;
        resultado += `• PROCESSO: ${processo}\n\n`;

        // ASSUNTO - COM 3 "===" DE CADA LADO
        if (assunto) {
            resultado += `=== ASSUNTO ===\n\n${assunto}\n\n`;
        }

        // DESCRIÇÃO - COM 3 "===" DE CADA LADO
        if (textoAssunto) {
            resultado += `=== DESCRIÇÃO ===\n\n${textoAssunto}`;
        }

        return resultado;
    }

    // ============================
    // NOMES DOS MÓDULOS
    // ============================
    function getNomeModulo(modulo) {
        const modulos = {
            'efornecedor': 'EFORNECEDOR',
            'catalogo': 'CATÁLOGO',
            'compras': 'COMPRAS PREPARAÇÃO',
            'sgc': 'COMPRAS - SGC',
            'direta': 'COMPRA DIRETA',
            'licitacao': 'LICITAÇÃO',
            'pca': 'PLANO DE COMPRAS',
            'arp': 'ATA DE REGISTRO DE PREÇOS (ARP)',
            'irp': 'INTENÇÃO DE REGISTRO DE PREÇOS (IRP)',
            'flowbee': 'FLOWBEE',
            'setup': 'SETUP'
        };
        return modulos[modulo] || modulo.toUpperCase();
    }

    // ============================
    // COPIAR E LIMPAR
    // ============================
    $('#copiarLimpar').click(function () {
        const resultado = $('#resultado').val();

        if (!resultado) {
            showToast('NENHUM TEXTO GERADO');
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(resultado).then(() => {
                showToast('TEXTO COPIADO!');
                limparFormulario();
            });
        } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = resultado;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('TEXTO COPIADO!');
            limparFormulario();
        }
    });

    // ============================
    // LIMPAR FORMULÁRIO
    // ============================
    function limparFormulario() {
        $('#formulario')[0].reset();
        $('#fornecedor-fields, #servidor-fields').hide();
        $('#resultado').val('');
        $('#contador').text('0/500 CARACTERES');
        showToast('FORMULÁRIO LIMPO!');
    }

    // ============================
    // HISTÓRICO
    // ============================
    function salvarNoHistorico(texto) {
        historico.unshift({
            texto: texto,
            data: new Date().toLocaleString('pt-BR'),
            id: Date.now()
        });

        if (historico.length > CONFIG.MAX_HISTORICO) {
            historico.pop();
        }

        localStorage.setItem('historicoTextos', JSON.stringify(historico));
        atualizarHistoricoUI();
    }

    function atualizarHistoricoUI() {
        const lista = $('#historico-lista');
        lista.empty();

        if (historico.length === 0) {
            lista.html('<p style="color: rgba(0,240,255,0.5); text-align:center;">NENHUM TEXTO SALVO</p>');
            return;
        }

        historico.forEach((item, index) => {
            const preview = item.texto.substring(0, 50) + (item.texto.length > 50 ? '...' : '');

            const div = `
                <div class="historico-item" data-id="${item.id}">
                    <div class="historico-header">
                        <span class="historico-data">[${item.data}]</span>
                        <button class="historico-delete" data-index="${index}">✕</button>
                    </div>
                    <div class="historico-preview">${preview}</div>
                </div>
            `;

            lista.append(div);
        });

        // Carregar texto ao clicar
        $('.historico-item').click(function (e) {
            if ($(e.target).hasClass('historico-delete')) return;

            const id = $(this).data('id');
            const item = historico.find(h => h.id === id);
            if (item) {
                $('#resultado').val(item.texto);
                showToast('TEXTO CARREGADO DO HISTÓRICO!');
            }
        });

        // Deletar item
        $('.historico-delete').click(function (e) {
            e.stopPropagation();
            const index = $(this).data('index');
            historico.splice(index, 1);
            localStorage.setItem('historicoTextos', JSON.stringify(historico));
            atualizarHistoricoUI();
            showToast('ITEM REMOVIDO DO HISTÓRICO');
        });
    }

    // Toggle do histórico
    $('#btn-historico').click(function () {
        const container = $('#historico-container');
        const btn = $(this);

        // Verifica se está visível ou oculto
        if (container.is(':visible')) {
            // Se está visível, oculta
            container.slideUp(300);
            btn.text('📋 VER HISTÓRICO');
        } else {
            // Se está oculto, mostra
            container.slideDown(300);
            btn.text('👁️ OCULTAR HISTÓRICO');
            atualizarHistoricoUI();
        }
    });

    // ============================
    // TOAST NOTIFICATION
    // ============================
    function showToast(message) {
        const toast = $('#toast');
        toast.text(message);
        toast.addClass('show');
        clearTimeout(toast.data('timer'));
        toast.data('timer', setTimeout(() => {
            toast.removeClass('show');
        }, 2500));
    }

    // ============================
    // ESTRELAS
    // ============================
    function createStars() {
        const starsCount = 100;
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2;
            const opacity = Math.random() * 0.5 + 0.1;
            const duration = Math.random() * 3 + 2;

            star.style.cssText = `
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                --opacity: ${opacity};
                --duration: ${duration}s;
            `;

            document.body.appendChild(star);
        }
    }

    // ============================
    // AUTO-SAVE (RASCUNHO)
    // ============================
    let autoSaveTimer;
    $('#formulario input, #formulario select, #formulario textarea').on('input change', function () {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            const dados = obterDadosFormulario();
            localStorage.setItem('rascunhoFormulario', JSON.stringify(dados));
        }, 2000);
    });

    function carregarRascunho() {
        const rascunho = localStorage.getItem('rascunhoFormulario');
        if (rascunho) {
            try {
                const dados = JSON.parse(rascunho);
                Object.keys(dados).forEach(key => {
                    const campo = $(`#${key}`);
                    if (campo.length) {
                        if (campo.is('select')) {
                            campo.val(dados[key]);
                        } else {
                            campo.val(dados[key]);
                        }
                    }
                });
                $('#tipo').trigger('change');
            } catch (e) { }
        }
    }
    carregarRascunho();

    // ============================================================
    // MODO RETRO / AZ - TOGGLE
    // ============================================================
    const toggleTheme = document.getElementById('toggleTheme');
    const themeLabel = document.getElementById('themeLabel');
    const themeBadge = document.getElementById('themeBadge');
    const themeThumb = document.getElementById('themeThumb');

    function toggleModo() {
        // Alterna entre os modos
        if (document.body.classList.contains('az-mode')) {
            // Volta para RETRO
            document.body.classList.remove('az-mode');
            document.body.classList.add('retro-mode');
            themeLabel.textContent = '🌙';
            themeBadge.textContent = 'RETRO';
            themeThumb.textContent = '';
            localStorage.setItem('tema-form', 'retro');
        } else {
            // Vai para AZ
            document.body.classList.remove('retro-mode');
            document.body.classList.add('az-mode');
            themeLabel.textContent = '🏢';
            themeBadge.textContent = 'AZ';
            themeThumb.textContent = 'AZ';
            localStorage.setItem('tema-form', 'az');
        }
    }

    if (toggleTheme) {
        toggleTheme.addEventListener('click', toggleModo);
    }

    // Carregar tema salvo
    const temaSalvo = localStorage.getItem('tema-form');
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

    // ============================
    // INICIALIZAR
    // ============================
    atualizarHistoricoUI();
    console.log('🚀 Sistema iniciado!');
});