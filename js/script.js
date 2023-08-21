
// -------------------------  share  ---------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.querySelector(".share-button");
    const shareIcons = document.querySelector(".share-icons");

    shareButton.addEventListener("click", () => {
        shareIcons.classList.toggle("show-icons");
    });
});


// -----------------------------  sort by ----------------------------

// Get the gallery container and all the gallery images
const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = document.querySelectorAll('.product-box');

function myFunction() {
    var selectedCategory = document.getElementById("mySelect").value;

    // Loop through all gallery images
    galleryImages.forEach((img) => {
        if (selectedCategory === 'all' || img.getAttribute('value') === selectedCategory.toLowerCase()) {
            img.style.display = 'flex'; // Show the image if it matches the selected category or 'All'
        } else {
            img.style.display = 'none'; // Hide the image if it doesn't match the selected category
        }
    });

    document.getElementById("demo").innerHTML = "You selected: " + selectedCategory;
}

// ------------------------------- search ------------------------------

function searchByID() {
    var input, filter, productBoxes, idBoxes, i;
    input = document.getElementById('searchInput');
    filter = input.value.trim().toUpperCase();
    productBoxes = document.querySelectorAll('.product-box');
    idBoxes = document.querySelectorAll('.id-box'); // Corrected class name

    for (i = 0; i < productBoxes.length; i++) {
        var searchText = idBoxes[i].textContent.trim().toUpperCase();
        if (searchText.indexOf(filter) > -1) {
            productBoxes[i].style.display = 'block';
        } else {
            productBoxes[i].style.display = 'none';
        }
    }
}
//---------------------------- gallery view --------------------------------

const images = document.querySelectorAll('[data-enlargable]');
const modal = document.querySelector('.image-modal');
const modalImg = document.getElementById('zoomed-img');
const closeBtn = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        modalImg.src = images[currentIndex].src;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        modalImg.src = images[currentIndex].src;
    }
});

//--------------------------- share buttons --------------------------------
function shareOnFacebook() {
    var url = "https://purcela.github.io/B13/";
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    window.open(facebookUrl, "_blank", "width=600,height=400");
}

// Attach click event to the Facebook share button
var facebookShareButton = document.querySelector(".facebook_share_btn");
facebookShareButton.addEventListener("click", shareOnFacebook);

// ------------------------------ testing -------------------------------------

