window.addEventListener("load", () => {
    const tab_home = document.querySelector("li#home");
    const tab_product = document.querySelector("li#product");
    const tab_contact = document.querySelector("li#contact");

    const home = document.querySelector("div.home");
    const product = document.querySelector("div.product");
    const contact = document.querySelector("div.contact");

    tab_home.addEventListener("click", () => {
        tab_home.setAttribute("class", "tab_focused");
        tab_product.setAttribute("class", "tab");
        tab_contact.setAttribute("class", "tab");
        home.removeAttribute("hidden", "hidden");
        product.setAttribute("hidden", "hidden");
        contact.setAttribute("hidden", "hidden");
    });

    tab_product.addEventListener("click", () => {
        tab_home.setAttribute("class", "tab");
        tab_product.setAttribute("class", "tab_focused");
        tab_contact.setAttribute("class", "tab");
        home.setAttribute("hidden", "hidden");
        product.removeAttribute("hidden", "hidden");
        contact.setAttribute("hidden", "hidden");
    });

    tab_contact.addEventListener("click", () => {
        tab_home.setAttribute("class", "tab");
        tab_product.setAttribute("class", "tab");
        tab_contact.setAttribute("class", "tab_focused");
        home.setAttribute("hidden", "hidden");
        product.setAttribute("hidden", "hidden");
        contact.removeAttribute("hidden", "hidden");
    });
});
