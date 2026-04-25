const steps = document.querySelectorAll(".form-step");
const circles = document.querySelectorAll(".step-circle");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
let currentStep = 0;

// LocalStorage Keys
const STORAGE_KEY = "sellzy_agency_draft";

// Load Data from LocalStorage
function loadSavedData() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
        Object.keys(saved).forEach(key => {
            const el = document.getElementById(key);
            if (el && el.type !== 'file') el.value = saved[key];
        });
    }
}

// Save Data to LocalStorage
function saveData() {
    const data = {};
    document.querySelectorAll("#agency-wizard input, #agency-wizard textarea, #agency-wizard select").forEach(el => {
        if (el.id && el.type !== 'file') data[el.id] = el.value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateWizard() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        circles[index].classList.toggle("active", index === currentStep);
        circles[index].classList.toggle("completed", index < currentStep);
    });

    backBtn.classList.toggle("hidden", currentStep === 0);
    nextBtn.innerText = currentStep === steps.length - 1 ? "Complete Setup" : "Next";
}

function validateStep() {
    const activeStep = steps[currentStep];
    const inputs = activeStep.querySelectorAll("input[required], textarea[required], select[required]");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "#d9534f";
            valid = false;
        } else {
            input.style.borderColor = "#ced4da";
        }
    });
    return valid;
}

nextBtn.addEventListener("click", () => {
    if (validateStep()) {
        saveData();
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateWizard();
        } else {
            alert("Agency Setup Submitted Successfully!");
            localStorage.removeItem(STORAGE_KEY); // Clear security sensitive data
            window.location.href = "/vendor/dashboard/"; // Example redirect
        }
    }
});

backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateWizard();
    }
});

// Auto-save on input
document.addEventListener("input", saveData);
window.onload = loadSavedData;