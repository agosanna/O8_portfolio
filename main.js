import images from "./images.js";
import selectedImages from "./selectedImages.js";
import numbers from "./numbers.js";

const imgContainer = document.getElementById("container");
const listContainer = document.getElementById("list");
const gridButton = document.getElementById("grid-btn");
const listButton = document.getElementById("list-btn");
const o8Button = document.getElementById("o8-btn")
const focus = document.getElementById("focus");
const imageNumber = document.getElementById("imageNumber");
const currentImageIndex = {};
const currentImageName = {};


window.addEventListener('load', function() {
    // Select the loading screen element
    const loadingScreen = document.getElementById('loading');

    // Hide the loading screen
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = '0.2s';
    setTimeout(() => {loadingScreen.style.display = 'none'}, 1000);
});

function numberToWords(number) {
    return numbers[number];
}

o8Button.addEventListener('click', ()=>{
    location.reload();
});

window.addEventListener('resize', ()=>{
    let newDevice = findDevice();
    console.log("resize, device: "+ newDevice);
    if (newDevice !== device && imgContainer.style.display === "flex"){
        location.reload();
    }
});

let listOpacity;
let threshold;
let scrollThreshold;

function findDevice() {
    if (window.innerWidth < 480){
        listOpacity = 0.2;
        threshold = 35;
        scrollThreshold = 17;
        return "mobile";
    } else if (window.innerWidth > 480 && window.innerWidth < 1025){
        listOpacity = 0.2;
        threshold = 35;
        scrollThreshold = 17;
        return "tablet";
    } else {
        listOpacity = 0.5;
        threshold = 30;
        scrollThreshold = 14;
        return "desktop";
    }
}

let device = findDevice();

function replaceAccent(str) {
    return str.replace(/É/g, 'E');
}

//GALLERY VIEW
function iterateImages(imagesObject) {
    document.body.style.overflow = "hidden";
    console.log("grid generated");
    // Reset containers and styles
    listContainer.innerHTML = "";
    imgContainer.innerHTML = ""; // Clear the previous images in the container
    imageNumber.style.visibility = "hidden";
    focus.style.visibility = "hidden";
    imgContainer.style.display = "flex";
    listContainer.style.visibility = "hidden";
    listButton.style.opacity = 0.5;
    gridButton.style.opacity = 1;
    document.querySelectorAll(".menu-sx").forEach(element => {
        element.style.opacity = 1;
    });

    // Flatten the images into a single array
    let imagesGrid = [];
    for (const category in selectedImages) {
        selectedImages[category].forEach((item) => {
            item.imageNames.forEach((imageName) => {
                let image = document.createElement('img');

                image.src = `Assets/Selected/${category}/${replaceAccent(item.brand)}/${imageName}.jpg`;
                image.alt = item.brand;
                console.log(image.alt);

                let topOrBottom = Math.random() < 0.5 ? "Top" : "Bottom";
                let leftOrRight = Math.random() < 0.5 ? "Left" : "Right";
                image.style[`padding${topOrBottom}`] = `${Math.random() * 2}vh`;
                image.style[`padding${leftOrRight}`] = `${Math.random() * 4}vw`;

                imagesGrid.push(image);
            });
        });
    }

    // Shuffle the images
    imagesGrid = imagesGrid.sort(() => Math.random() - 0.5);

    let imageCountsPattern;
    console.log("device: " + device);

    if (device === "mobile") {
        imageCountsPattern = [4, 5, 4];
    } else if (device === "tablet") {
        imageCountsPattern = [4, 5, 6, 6, 5, 4];
    } else {
        imageCountsPattern = [4, 5, 5, 5, 5, 5, 5, 4];
    }

    // Iterate over the pattern and create columns accordingly
    for (let i = 0; i < imageCountsPattern.length; i++) {
        // Create a new div for each chunk
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('images-column');

        // Take images according to the pattern
        let imagesToAdd = imagesGrid.splice(0, imageCountsPattern[i]);

        // Append the images to the column
        imagesToAdd.forEach(image => {
            columnDiv.appendChild(image);
            image.addEventListener("click", () => {
                currentImageName[image.alt] = image.src.split('/').pop().split('.').shift(); // Memorizza il nome dell'immagine
                iterateList(images);
                scrollToFirst(image.alt);
            });
        });

        // Append the new div to imgContainer
        imgContainer.appendChild(columnDiv);
    }
}

//ENDLESS SCROLL
// Function to check if an element is at the bottom of the viewport
function isElementAtBottom(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom - threshold <= window.innerHeight;
}

// Intersection Observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && isElementAtBottom(entry.target)) {
            // When the last child element reaches the bottom, you can trigger your action here
            console.log("Last child reached bottom of the screen");
            iterateList(images)
        }
    });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback);

//LIST VIEW 
function scrollToFirst(firstImage) {
    // Find the first list item that matches the firstImage criteria
    const listItem = Array.from(listContainer.children).find(item => item.textContent === firstImage);
    
    // Log per il debug
    console.log('First image text:', firstImage);
    console.log('List item found:', listItem);

    if (listItem) {
        // Altezza della viewport
        const viewportHeight = window.innerHeight;
        
        // Offset top dell'elemento
        const elementOffsetTop = listItem.getBoundingClientRect().top + window.scrollY;
        
        // Calcola la posizione dove scorrere per centrare l'elemento
        const scrollToPosition = elementOffsetTop - (viewportHeight / 2) + (listItem.offsetHeight / 2);

        // Scorri fino alla posizione calcolata
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'auto'
        });
    }
}

function iterateList(imagesObject) {
    // Reset containers and styles
    document.body.style.overflow = "visible";
    imgContainer.innerHTML = "";
    imgContainer.style.display = "none";
    imageNumber.style.visibility = "visible";
    focus.style.visibility = "visible";
    listContainer.style.visibility = "visible";
    listButton.style.opacity = 1;
    gridButton.style.opacity = 0.5;
    document.querySelectorAll(".menu-sx").forEach(element => {
        element.style.opacity = 0;
    });

    console.log("New list created");

    // Get all categories and identify the last one
    const categories = Object.keys(imagesObject);
    const lastCategory = categories[categories.length - 1];

    // Function to add items to the list container
    const addItemsToList = (category) => {
        imagesObject[category].forEach((item) => {
            let listItem = document.createElement('a');
            listItem.textContent = item.brand;
            listContainer.appendChild(listItem);
            listItem.addEventListener("click", ()=>scrollToFirst(item.brand));
        });
    };

    // Process the remaining categories
    for (let y = 0; y < 3; y++){
        for (let i = 0; i < categories.length; i++) {
            addItemsToList(categories[i]);
        }
    }
    

    // Observe the last child of listContainer
    const lastChild = listContainer.lastElementChild;
    if (lastChild) {
        observer.observe(lastChild);
    }

    highlightBrand();
}

// Initialize the grid view
iterateImages(selectedImages);

gridButton.addEventListener("click", () => {
    device = findDevice();
    iterateImages(selectedImages);
});
listButton.addEventListener("click", () => {
    iterateList(images);
    scrollToFirst("De Sede x Pin-Up");
    window.scrollBy({
        top: threshold,
        left: 0,
        behavior: "auto",
      });

});

window.addEventListener("scroll", highlightBrand);


//IMAGE NAVIGATION INSIDE THE LIST

function isElementCentered(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    
    // Check if the element's center is within a threshold of the viewport's center
    return Math.abs(elCenter - viewportCenter) <= scrollThreshold;
}

function findCategoryAndIndex(imagesObject, brandName) {
    for (const category in imagesObject) {
        const brands = imagesObject[category];
        for (let index = 0; index < brands.length; index++) {
            if (brands[index].brand === brandName) {
                return { category, index };
            }
        }
    }
    return null;
}

function getFirstImageIndexByBrand(imagesObject, brandName) {
    let totalIndex = 0; // Total index across all images
    for (const category in imagesObject) {
        const brands = imagesObject[category];
        for (let index = 0; index < brands.length; index++) {
            if (brands[index].brand === brandName) {
                // Calculate the total index by summing up counts of previous brands
                return totalIndex; 
            }
            totalIndex += brands[index].count; // Increment totalIndex by the count of images for each brand
        }
    }
    return -1; // Brand not found
}


// Function to apply styles and create elements for centered brands 
function updateImage(category, index, brandName) {
    let totalIndex = getFirstImageIndexByBrand(images, brandName) + 1;
    const brand = images[category][index];
    let imgIdx;
    if (currentImageName[brandName]) {
        imgIdx = parseInt(currentImageName[brandName], 10);
    } else {
        imgIdx = 1;
    }

    if (imgIdx > brand.count) {
        window.scrollBy({
            top: threshold,
            left: 0,
            behavior: "auto",
        });
        imgIdx = 1;
    }

    let image = document.createElement('img');
    const paddedIndex = String(index + 1).padStart(2, '0');
    image.src = `Assets/${category}/${paddedIndex}_${replaceAccent(brandName)}/0${imgIdx}.jpg`;
    focus.innerHTML = "";
    imageNumber.innerHTML = "";

    // Display the corresponding number in words
    let numberInWords = numberToWords(totalIndex + imgIdx - 1);
    let numberText = document.createElement('p');
    numberText.textContent = numberInWords;
    imageNumber.appendChild(numberText);

    // Append the image to the focus container
    focus.appendChild(image);

    // Add click event to iterate to the next image
    image.addEventListener('click', () => {
        console.log(imgIdx);
        imgIdx++;
        currentImageName[brandName] = imgIdx.toString(); // Update the image name for the next click
        updateImage(category, index, brandName);
    });
}



// Function to apply styles and create elements for centered brands
let currentCenteredBrand = null; // Track the currently centered brand

function highlightBrand() {
    const items = Array.from(listContainer.children);
    let newCenteredBrand = null; // Track the newly centered brand

    items.forEach(item => {
        if (isElementCentered(item)) {
            item.style.opacity = 1;
            item.style.transition = "0.2s";
            item.style.paddingLeft = "10px";
            newCenteredBrand = item.textContent; // Update the newly centered brand
        } else {
            item.style.opacity = listOpacity;
            item.style.paddingLeft = "0";
            item.style.transition = "0";
        }
    });

    // Check if the centered brand has changed
    if (newCenteredBrand !== currentCenteredBrand) {
        currentCenteredBrand = newCenteredBrand; // Update the currently centered brand
        const result = findCategoryAndIndex(images, currentCenteredBrand);
        if (result) {
            const { category, index } = result;
            currentImageIndex[currentCenteredBrand] = 1; // Initialize the image index
            updateImage(category, index, currentCenteredBrand);
        }
    }
}


document.addEventListener('keyup', handleKeyUp);
document.addEventListener('keydown', handleKeyDown);

function handleKeyUp(event) {
    if (event.key === 'ArrowUp') {
        window.scrollBy({
            top: -threshold,
            left: 0,
            //behavior: "smooth",
          });
    } else if (event.key === 'ArrowDown') {
        window.scrollBy({
            top: threshold,
            left: 0,
            //behavior: "smooth",
          });
    }
}

//alternative nav
function handleKeyDown(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        // Prevent the default scroll behavior of arrow keys
        event.preventDefault();
    }
}

