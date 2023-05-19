function renderNav() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const ul = document.createElement('ul');
    ul.classList.add('nav_list');

    const liHome = document.createElement('li');
    liHome.classList.add('nav_item');
    const aHome = document.createElement('a');
    aHome.id = 'nav_home';
    aHome.href = 'index.html';
    aHome.textContent = 'Home';
    liHome.appendChild(aHome);
    ul.appendChild(liHome);

    const liAbout = document.createElement('li');
    liAbout.classList.add('nav_item');
    const aAbout = document.createElement('a');
    aAbout.id = 'nav_about';
    aAbout.href = 'about.html';
    aAbout.textContent = 'About';
    liAbout.appendChild(aAbout);
    ul.appendChild(liAbout);

    const h2Brand = document.createElement('h2');
    h2Brand.classList.add('nav_brand'); // Add a CSS class for positioning
    const aInventory = document.createElement('a');
    aInventory.id = 'nav_inventory';
    aInventory.href = 'index.html';
    aInventory.textContent = 'BoxIt';
    h2Brand.appendChild(aInventory);

    nav.appendChild(ul);
    nav.appendChild(h2Brand);

    const mainContainer = document.querySelector('.main_container');
    const firstChild = mainContainer.firstChild;
    mainContainer.insertBefore(nav, firstChild);

    // <nav class="navbar">
    //     <ul class="nav_list">
    //         <li class="nav_item">
    //             <a id="nav_home" href="index.html">Home</a>
    //         </li>
    //         <li class="nav_item">
    //             <a id="nav_about" href="about.html">About</a>
    //         </li>
    //     </ul>
    //     <h2 class="nav_brand">
    //         <a id="nav_inventory" href="index.html">Inventory</a>
    //     </h2>
    // </nav>
}

function addToInventory() {

}