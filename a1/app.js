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
    aInventory.textContent = 'StoreIt';
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

window.addEventListener("load", displayInventory);

let items = [];

// https://m.media-amazon.com/images/I/41e30GpzsNL._AC_.jpg
// https://m.media-amazon.com/images/I/61PoKJpmxPL._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/41wJ0GVkTSL._AC_SX679_.jpg


const initialItem =
    '{"name":"Aung Da Grape",' +
    '"description":"Developer",' +
    '"price":9999999,' +
    '"image":"https://m.media-amazon.com/images/I/51tYXyD5NHL._AC_.jpg"}';

items.push(JSON.parse(initialItem));

const itemNameInput = document.getElementById('name');
const itemDescriptionInput = document.getElementById('description');
const itemPriceInput = document.getElementById('price');
const itemImageInput = document.getElementById('image');
const itemForm = document.getElementById('item_form');

function addToInventory() {

    let itemName = itemNameInput.value;
    let itemDescription = itemDescriptionInput.value;
    let itemPrice = itemPriceInput.value;
    let itemImage = itemImageInput.value;

    if (!itemName || !itemDescription || !itemPrice || !itemImage) {
        alert('Please fill in all the required fields.');
        return false;
    }

    let item = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        image: itemImage,
    };
    items.push(item);
    itemForm.reset();
    displayInventory();

    return false;
}

function displayInventory() {
    const itemList = document.getElementById('cards_container');
    const emptyContainer = document.querySelector('.empty');

    if (!items.length) {
        const emptyStorage = document.createElement('h2')
        emptyStorage.textContent = 'The storage is empty!';
        emptyStorage.classList.add('empty_storage');
        emptyContainer.innerHTML='';
        emptyContainer.appendChild(emptyStorage);
    }
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        let itemCard = createItemCard(item, index);
        itemList.appendChild(itemCard);
    });
}
function createItemCard(item, index) {
    const itemCard = document.createElement('li');
    itemCard.classList.add('card');

    const image = document.createElement('img');
    image.src = item.image;
    itemCard.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card_content');

    const name = document.createElement('h2');
    name.textContent = item.name;
    cardContent.appendChild(name);

    const description = document.createElement('p');
    description.textContent = item.description;
    cardContent.appendChild(description);

    const price = document.createElement('p');
    price.textContent = 'Price: $' + item.price;
    cardContent.appendChild(price);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
        removeFromInventory(index);
    });
    itemCard.appendChild(cardContent);
    itemCard.appendChild(deleteButton);
    return itemCard;
}
function cleanStorage() {
    items = [];
    displayInventory();
}

function removeFromInventory(index) {
    items.splice(index, 1);
    displayInventory();
}
