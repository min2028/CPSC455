function renderNav() {
    const nav = document.createElement('nav');

    const aHome = document.createElement('a');
    aHome.id = 'nav_home';
    aHome.href = '#';
    aHome.textContent = 'Home';
    nav.appendChild(aHome);

    const aAbout = document.createElement('a');
    aAbout.id = 'nav_about';
    aAbout.href = 'about.html';
    aAbout.textContent = 'About';
    nav.appendChild(aAbout);

    const aInventory = document.createElement('a');
    aInventory.id = 'nav_brand';
    aInventory.href = '#';
    aInventory.textContent = 'Inventory';
    nav.appendChild(aInventory);

    const mainContainer = document.querySelector('.main_container');
    mainContainer.appendChild(nav);
}