/**
 * CONFIGURAÇÕES GERAIS - CASO CLÍNICO
 */
const CONFIG = {
    accessHash: "RzNub21AbXJwYg==", // Senha Base64: G3nom@mrpb
    initialMoney: 52800,
    money: 52800,
    examDelay: 10000 // 10 segundos de processamento
};

/**
 * DATABASE DE EXAMES COMPLETA (Baseada no data.js)
 */
const EXAMS_DB = [
    // --- CATEGORIA: Array-CGH ---
    {
        id: "cgh_probando",
        category: "Array-CGH",
        label: "Probando (II-1)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH probando:</strong> Não foram detectadas alterações de número de cópias no genoma do indivíduo investigado compatíveis com a hipótese diagnóstica."
    },
    {
        id: "cgh_mae",
        category: "Array-CGH",
        label: "Mãe (I-1)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH mãe:</strong> Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma da paciente investigada."
    },
    {
        id: "cgh_pai",
        category: "Array-CGH",
        label: "Pai (I-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH pai:</strong> Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente investigado"
    },

    // --- CATEGORIA: Sanger ---
    {
        id: "sanger_probando",
        category: "Sanger",
        label: "Probando (II-1)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["AP4M1"],
        successResult: "<strong>Resultado Sanger probando:</strong> Foram investigados por sequenciamento Sanger todos os exons do gene AP4M1. Foram detectadas as variantes NM_004722.4(AP4M1):c.1012C>T p.Arg338* e NM_004722.4: c.59-1G>C no gene AP4M1, ambas em heterozigose.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    {
        id: "sanger_mae",
        category: "Sanger",
        label: "Mãe (I-1)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["AP4M1"],
        successResult: "<strong>Resultado Sanger mãe:</strong> Foram investigados por sequenciamento Sanger todos os exons do gene AP4M1. Foi detectada a variante NM_004722.4(AP4M1):c.1012C>T p.Arg338* em heterozigose.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    {
        id: "sanger_pai",
        category: "Sanger",
        label: "Pai (I-2)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["AP4M1"],
        successResult: "<strong>Resultado Sanger pai:</strong> Foram investigados por sequenciamento Sanger todos os exons do gene AP4M1. Foi detectada a variante NM_004722.4: c.59-1G>C no gene AP4M1 em heterozigose.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    
    // --- CATEGORIA: Array-SNP ---
    {
        id: "snp_probando",
        category: "Array-SNP",
        label: "Probando (II-3)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP probando:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente."
    },
    {
        id: "snp_mae",
        category: "Array-SNP",
        label: "Mãe (I-1)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP mãe:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente."
    },
    {
        id: "snp_pai",
        category: "Array-SNP",
        label: "Pai (I-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP pai:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente."
    },
    
    // --- CATEGORIA: Cariótipo ---
    {
        id: "cariotipo_probando",
        category: "Cariótipo",
        label: "Probando (II-3)",
        cost: 600,
        type: "text",
        result: "<strong>Cariótipo com bandamento G probando:</strong> Material estudado: metáfases de linfócitos isolados a partir de sangue periférico <br> Resultado cariótipo : foram analisadas 20 células de sangue periférico do paciente. Não foram detectadas alterações cromossômicas clinicamente relevantes. Cariótipo 46,XY."
    },
    {
        id: "cariotipo_mae",
        category: "Cariótipo",
        label: "Mãe (I-1)",
        cost: 600,
        type: "text",
        result: "<strong>Cariótipo com bandamento G mãe:</strong> Material estudado: metáfases de linfócitos isolados a partir de sangue periférico <br> Resultado cariótipo : foram analisadas 20 células de sangue periférico do paciente. Não foram detectadas alterações cromossômicas clinicamente relevantes. Cariótipo 46,XX."
    },
    {
        id: "cariotipo_pai",
        category: "Cariótipo",
        label: "Pai (I-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado cariótipo com bandamento G pai:</strong> Material estudado: metáfases de linfócitos isolados a partir de sangue periférico <br> Resultado cariótipo : foram analisadas 20 células de sangue periférico do paciente. Não foram detectadas alterações cromossômicas clinicamente relevantes. Cariótipo 46,XY."
    },
    
    // --- CATEGORIA: FISH ---
    {
        id: "fish_probando",
        category: "FISH",
        label: "Probando (II-1)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH probando:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo estudado não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    {
        id: "fish_mae",
        category: "FISH",
        label: "Mãe (I-1)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH mãe:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo estudado não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    {
        id: "fish_pai",
        category: "FISH",
        label: "Pai (I-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH pai:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo estudado não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    
    // --- CATEGORIA: NGS e Outros ---
    {
        id: "exoma_probando",
        category: "NGS / Painéis",
        label: "NGS Exoma Probando",
        cost: 5000,
        type: "csv_filter",
        filename: "CG2_AtInt_caso_paraplegia_espastica_exoma_probando.csv",
        resultTitle: "Resultado NGS exoma probando"
    },
    {
        id: "exoma_trio",
        category: "NGS / Painéis",
        label: "NGS Exoma Família (Trio)",
        cost: 10000,
        type: "csv_filter",
        filename: "CG2_AtInt_caso_paraplegia_espastica_exoma_familia.csv",
        resultTitle: "Resultado NGS exoma trio"
    },
    {
        id: "painel_probando",
        category: "NGS / Painéis",
        label: "NGS Painel Probando (Neuromusculares)",
        cost: 3000,
        type: "csv_filter",
        filename: "CG2_AtInt_caso_paraplegia_espastica_painel_probando.csv",
        resultTitle: "Resultado NGS painel probando"
    },
    {
        id: "painel_trio",
        category: "NGS / Painéis",
        label: "NGS Painel Família (Neuromusculares)",
        cost: 6000,
        type: "csv_filter",
        filename: "CG2_AtInt_caso_paraplegia_espastica_painel_familia.csv",
        resultTitle: "Resultado NGS painel trio"
    },
    {
        id: "paternidade",
        category: "Outros",
        label: "Investigação de Paternidade",
        cost: 400,
        type: "text",
        result: "<strong>Resultado teste de paternidade:</strong> Foram genotipados 16 marcadores STR no material do probando e dos supostos pais biológicos. O teste confirma que o probando é filho biológico dos progenitores testados, com probabilidade de paternidade superior a 99,9%."
    }
];

let purchasedExams = new Set();
let pendingSangerExamId = null;

document.addEventListener("DOMContentLoaded", () => {
    updateMoneyDisplay(CONFIG.initialMoney, false);
    updateTimestamp();
    
    document.getElementById("password-button").addEventListener("click", tryLogin);
    document.getElementById("password-input").addEventListener("keypress", (e) => {
        if(e.key === "Enter") tryLogin();
    });
});

function tryLogin() {
    const input = document.getElementById("password-input").value;
    const errorMsg = document.getElementById("login-error");
    
    if (btoa(input) === CONFIG.accessHash) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("game-container").style.display = "flex";
        initExamCategories(); 
    } else {
        errorMsg.style.display = "block";
        setTimeout(() => errorMsg.style.display = "none", 2000);
    }
}

function switchTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.getElementById(`tab-${tabId}`).classList.add("active");
    
    const btnMap = { 'caso': 0, 'exames': 1, 'resultados': 2 };
    document.querySelectorAll(".tab-btn")[btnMap[tabId]].classList.add("active");

    if (tabId === 'resultados') {
        const badge = document.getElementById("notification-badge");
        if(badge) badge.style.display = "none";
    }
}

function updateMoneyDisplay(newValue, animate = true) {
    const element = document.getElementById("total-money");
    if (!animate) {
        CONFIG.money = newValue;
        element.innerText = formatCurrency(newValue);
        return;
    }
    const startValue = CONFIG.money;
    const endValue = newValue;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentMoney = startValue + (endValue - startValue) * progress;
        element.innerText = formatCurrency(currentMoney);
        if (progress < 1) requestAnimationFrame(update);
        else CONFIG.money = endValue;
    }
    requestAnimationFrame(update);
}

function formatCurrency(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function initExamCategories() {
    const categories = [...new Set(EXAMS_DB.map(e => e.category))];
    const container = document.getElementById("categories-list");
    container.innerHTML = "";
    
    categories.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.innerText = cat;
        btn.onclick = () => showExamsByCategory(cat, btn);
        container.appendChild(btn);
        
        if (index === 0) showExamsByCategory(cat, btn);
    });
}

function showExamsByCategory(category, btnElement) {
    if (btnElement) {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btnElement.classList.add("active");
    }
    
    document.getElementById("selected-category-title").innerText = category;
    const container = document.getElementById("exams-grid");
    container.innerHTML = "";
    
    const filteredExams = EXAMS_DB.filter(e => e.category === category);
    
    filteredExams.forEach(exam => {
        const isBought = purchasedExams.has(exam.id);
        const div = document.createElement("div");
        div.className = "exam-card";
        div.innerHTML = `
            <div>
                <div class="exam-header"><span>${exam.label}</span></div>
                <span class="exam-cost">${formatCurrency(exam.cost)}</span>
            </div>
            <button class="exam-btn" id="btn-${exam.id}" ${isBought ? 'disabled' : ''} onclick="buyExam('${exam.id}')">
                ${isBought ? 'Liberado' : 'Solicitar Exame'}
            </button>`;
        container.appendChild(div);
    });
}

function buyExam(examId) {
    if (purchasedExams.has(examId)) return;
    const exam = EXAMS_DB.find(e => e.id === examId);
    if (CONFIG.money < exam.cost) { 
        showToast("Saldo insuficiente!", "error"); 
        return; 
    }
    if (exam.type === 'input_gene') {
        pendingSangerExamId = examId;
        openSangerModal();
        return;
    }
    executePurchase(exam, null);
}

function openSangerModal() {
    document.getElementById('sanger-gene-input').value = "";
    document.getElementById('sanger-modal').style.display = "flex";
}

function closeSangerModal() {
    document.getElementById('sanger-modal').style.display = "none";
    pendingSangerExamId = null;
}

function confirmSangerRequest() {
    const geneInput = document.getElementById('sanger-gene-input').value.trim().toUpperCase();
    if (!geneInput) { alert("Digite o gene."); return; }
    const exam = EXAMS_DB.find(e => e.id === pendingSangerExamId);
    closeSangerModal();
    executePurchase(exam, geneInput);
}

function executePurchase(exam, userGeneInput) {
    updateMoneyDisplay(CONFIG.money - exam.cost);
    purchasedExams.add(exam.id);
    const btn = document.getElementById(`btn-${exam.id}`);
    if(btn) { btn.innerText = "Em análise..."; btn.disabled = true; }
    showToast(`Processando resultado...`, "info");
    setTimeout(() => {
        if(btn) btn.innerText = "Liberado";
        processResult(exam, userGeneInput);
        if (document.getElementById("tab-resultados").className !== "tab-content active") {
            document.getElementById("notification-badge").style.display = "block";
        }
    }, CONFIG.examDelay);
}

function processResult(exam, userGeneInput) {
    const resultsDiv = document.getElementById("results");
    const emptyState = resultsDiv.querySelector('.empty-state');
    if(emptyState) emptyState.remove();

    const card = document.createElement("div");
    card.className = "result-flashcard";
    const time = new Date().toLocaleTimeString('pt-BR');

    let bodyContent = "";
    
    if (exam.type === "input_gene") {
        bodyContent = exam.correctGenes.includes(userGeneInput) ? exam.successResult : exam.failResult;
    } else if (exam.type === "csv_filter") {
        const downloadBtnHtml = `
            <div style="margin-bottom: 15px; margin-top: 10px;">
                <a href="${exam.filename}" download="${exam.filename}" style="display: inline-block; padding: 8px 15px; background-color: #1e3a8a; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 0.9em; transition: background 0.3s;" onmouseover="this.style.backgroundColor='#1e40af'" onmouseout="this.style.backgroundColor='#1e3a8a'">
                    📥 Baixar Arquivo Completo (.csv)
                </a>
            </div>
        `;

        bodyContent = `<div id="csv-container-${exam.id}"><p>Carregando dados do sequenciamento...</p></div>`;
        
        fetch(exam.filename)
            .then(res => res.text())
            .then(text => {
                document.getElementById(`csv-container-${exam.id}`).innerHTML = downloadBtnHtml + generateHtmlFromCSV(exam.resultTitle, text);
            })
            .catch(err => {
                document.getElementById(`csv-container-${exam.id}`).innerHTML = `<p style="color:red">Erro ao carregar CSV: ${err.message}</p>`;
            });
    } else {
        bodyContent = exam.result;
    }

    card.innerHTML = `<div class="result-header"><span>🔬 ${exam.label}</span><span>${time}</span></div><div class="result-body">${bodyContent}</div>`;
    resultsDiv.prepend(card);
}

function generateHtmlFromCSV(title, csvText) {
    const rows = csvText.trim().split("\n");
    let html = `<strong>${title}</strong><div class="result-table-container"><table class="result-table"><thead><tr>`;
    
    const separator = rows[0].includes(";") ? ";" : ",";
    
    const headers = rows[0].split(separator);
    headers.forEach(h => html += `<th>${h.trim()}</th>`);
    html += '</tr></thead><tbody>';
    
    for(let i=1; i<rows.length; i++) {
        let cols = rows[i].split(separator);
        // Ajustado para destacar tanto AP4M1 quanto SPG11, dependendo do arquivo CSV fornecido
        let isHighlight = cols.some(c => c.toUpperCase().includes("AP4M1") || c.toUpperCase().includes("SPG11"));
        
        html += `<tr class="${isHighlight ? 'highlight-variant' : ''}">`;
        cols.forEach(c => html += `<td>${c.trim()}</td>`);
        html += '</tr>';
    }
    return html + '</tbody></table></div>';
}

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    if(type === "error") toast.style.background = "#ef4444";
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function updateTimestamp() {
    document.getElementById("timestamp").innerText = `Sessão iniciada: ${new Date().toLocaleString()}`;
}