document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const titles = document.querySelectorAll(".title .part");
    const nav = document.querySelector(".contact");
    const contacts = document.querySelectorAll(".contact-list, .email");

    hero.style.opacity = "1";

    titles.forEach(title => {
        title.innerText = "";
    });

    contacts.forEach(contact => {
        contact.style.opacity = "0";
        contact.style.transform = "translateY(20px)";
    });

    function typeText(element, text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text[i];
                i++;
            } else {
                clearInterval(interval);
                setTimeout(callback, 500);
            }
        }, 50);
    }

    function startTyping(index) {
        if (index < titles.length) {
            const title = titles[index];
            const text = title.dataset.text;
            typeText(title, text, () => {
                startTyping(index + 1);
            });
        } else {
            setTimeout(() => {
                contacts.forEach((contact, i) => {
                    setTimeout(() => {
                        contact.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                        contact.style.opacity = "1";
                        contact.style.transform = "translateY(0)";
                    }, i * 150);
                });
            }, 500);
        }
    }

    startTyping(0);
});
