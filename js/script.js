// -------------------------  soc media  ---------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const socBox = document.querySelector('.soc-box');
    const mediaIcons = document.querySelector('.media-icons');
    let mediaIconsVisible = false;

    socBox.addEventListener('click', function(event) {
        event.stopPropagation();

        if (mediaIconsVisible) {
            mediaIcons.style.display = 'none';
        } else {
            mediaIcons.style.display = 'block';
        }

        mediaIconsVisible = !mediaIconsVisible;
    });

    document.addEventListener('click', function(event) {
        if (!mediaIcons.contains(event.target)) {
            mediaIcons.style.display = 'none';
            mediaIconsVisible = false;
        }
    });
});

// -------------------------  share  ---------------------------------

$(document).ready(function() {
    var open = false;
    $('.circle-bg').on('click', function() {
        event.stopPropagation(); // hide after clicking outside <div> 
        if (!open) {
            $(this).animate({
                height: '+=10px',
                width: '+=10px'
            }, 300);

            $('.outer-icons').css('opacity', 1); // Show the outer-icons
            $('.icon').fadeOut();
            $(this).html("<i class='icon fa fa-times' style='display: none'></i>");
            $('.icon').fadeIn();

            open = true;
        } else {
            $(this).animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons').css('opacity', 0); // Hide the outer-icons
            $('.icon').fadeOut();
            $(this).html("<i class='icon fa-solid fa-share-nodes fa-beat-fade fa-xs' style='display: none'></i>");
            $('.icon').fadeIn();

            open = false;
        }
    });
 // ---------- hide after clicking outside <div> 
    $(document).on('click', function(event) {
        if (open && !$(event.target).closest('.outer-icons').length) {
            $('.circle-bg').animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons').css('opacity', 0); // Hide the outer-icons
            $('.icon').fadeOut();
            $('.circle-bg').html("<i class='icon fa-solid fa-share-nodes fa-beat-fade fa-xs' style='display: none'></i>");
            $('.icon').fadeIn();

            open = false;
        }
    });
//-----------------------------
});



// -----------------------------  hide footer ----------------------------

const footerBox = document.querySelector('.footer-box');
const toggleButton = document.getElementById('toggleFooter');

toggleButton.addEventListener('click', () => {
    footerBox.classList.toggle('hidden');
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



// ------------------------------ testing -------------------------------------

