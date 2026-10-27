
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        });
    });
}

const contactForm = document.querySelector("#contact-form");
const contactSuccess = document.querySelector("#contact-success");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactRules = {
    name: (value) =>
        value.length >= 2 ? "" : "Veuillez saisir votre nom (2 caractères minimum).",
    email: (value) =>
        emailPattern.test(value) ? "" : "Veuillez saisir une adresse e-mail valide.",
    subject: (value) =>
        value ? "" : "Veuillez choisir une formation.",
    message: (value) =>
        value.length >= 10 ? "" : "Votre message doit contenir au moins 10 caractères."
};

function validateField(field) {
    const rule = contactRules[field.name];
    const error = document.querySelector(`#${field.id}-error`);
    const message = rule ? rule(field.value.trim()) : "";

    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
    if (error) {
        error.textContent = message;
    }

    return !message;
}

if (contactForm && contactSuccess) {
    const fields = contactForm.querySelectorAll("input, select, textarea");

    fields.forEach((field) => {
        field.addEventListener("blur", () => validateField(field));
        field.addEventListener("input", () => {
            if (field.classList.contains("is-invalid")) {
                validateField(field);
            }
        });
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const results = Array.from(fields).map(validateField);
        const firstInvalid = contactForm.querySelector(".is-invalid");

        if (results.includes(false)) {
            contactSuccess.hidden = true;
            firstInvalid?.focus();
            return;
        }

        const name = contactForm.elements.name.value.trim();
        contactSuccess.textContent =
            `Merci ${name}, votre demande a bien été enregistrée. ` +
            "(Démonstration : aucun message n'est réellement envoyé.)";
        contactSuccess.hidden = false;
        contactForm.reset();
    });
}
