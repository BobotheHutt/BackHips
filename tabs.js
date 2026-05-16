// Shared layout configuration for the workshop website
document.addEventListener("DOMContentLoaded", () => {
    // 1. Generate the shared layout header
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    const headerHtml = `
        <div class="header-container">
            <div class="logo-area">
                <h1><span class="logo-icon">🔧</span> Mobility Hub</h1>
                <p class="subtitle">Reference & Reading Console</p>
            </div>
            <nav>
                <a href="index.html" class="tab-btn ${currentFile === 'index.html' ? 'active-tab' : ''}">🦿 Hip System</a>
                <a href="back.html" class="tab-btn ${currentFile === 'back.html' ? 'active-tab' : ''}">⚙️ Back System</a>
                <a href="summarizer.html" class="tab-btn ${currentFile === 'summarizer.html' ? 'active-tab' : ''}">⚡ Reading Summarizer</a>
            </nav>
        </div>
    `;
    document.getElementById("shared-header").innerHTML = headerHtml;

    // 2. Initialize checkbox sliders
    const form = document.getElementById("symptom-form");
    if (form) {
        form.addEventListener("change", () => {
            const checkboxes = form.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
                const sliderArea = document.getElementById(`scale-${cb.id.split('-')[1]}`);
                if (sliderArea) {
                    sliderArea.style.display = cb.checked ? 'block' : 'none';
                }
            });
            if (typeof runAnalysisPipeline === "function") {
                runAnalysisPipeline();
            }
        });
    }
});

// Reset function for checkboxes
function clearAllSymptoms() {
    const form = document.getElementById("symptom-form");
    if (form) {
        form.reset();
        const sliders = form.querySelectorAll('.slider-area');
        sliders.forEach(s => s.style.display = 'none');
        if (typeof runAnalysisPipeline === "function") {
            runAnalysisPipeline();
        }
    }
}
