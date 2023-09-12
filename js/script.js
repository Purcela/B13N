// -------------------------  burger-menu  ---------------------------------

$(document).ready(function () {
    $("#burger-menu").on("click", function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document body
        $("#menu1").toggleClass("open-menu");
    });

    // Close menu when clicking outside of the menu box
    $(document.body).on("click", function (event) {
        if (!$(event.target).closest(".menu-box").length) {
            // If the click target is not within .menu-box or .menu-ul1, close the menu
            $("#menu1").removeClass("open-menu");
        }
    });
});

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
            mediaIcons.style.display = 'flex';
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
//-------------------------------- share --------------------------------
var urlToShare = "https://purcela.github.io/BeDifferentB13/";

// Create a function to handle button click
document.getElementById("shareButton").addEventListener("click", function() {
    // Check if the user has sharing capabilities
    if (navigator.share) {
        // If yes, create a ShareData object
        var shareData = {
            title: "https://www.facebook.com/profile.php?id=61550044239770",
            text: "Break The Stereotypes, Be Different B13",
            url: urlToShare,
        };

        // Call the share() method to share the data
        navigator.share(shareData)
            .then(function() {
                console.log("Successfully shared");
            })
            .catch(function(error) {
                console.error("Error while trying to share:", error);
            });
    } else {
        // If the share function is not supported, provide an alternative sharing method
        alert("Sharing is not supported on this device.");
    }
});

// -----------------------------------------

$(document).ready(function() {
    var open = false;

    // Click event on the container
    $('.container').on('click', function(event) {
        event.stopPropagation();

        if (!open) {
            $('.circle-bg').animate({
                height: '+=10px',
                width: '+=10px'
            }, 300);

            $('.outer-icons').css('display', 'flex'); // Show the outer-icons
            $('.icon').fadeOut();
            $('.circle-bg').html("<i class='icon fa fa-times' style='display: none'></i>");
            $('.icon').fadeIn();

            open = true;
        } else {
            $('.circle-bg').animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons').css('display', 'none'); // Hide the outer-icons
            $('.icon').fadeOut();
            $('.circle-bg').html("<i class='icon fa-solid fa-share-nodes fa-beat-fade fa-xs' style='display: none'></i>");
            $('.icon').fadeIn();

            open = false;
        }
    });

    // Click event on the document to close when clicking outside the container
    $(document).on('click', function(event) {
        if (open && !$(event.target).closest('.container').length) {
            $('.circle-bg').animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons').css('display', 'none'); // Hide the outer-icons
            $('.icon').fadeOut();
            $('.circle-bg').html("<i class='icon fa-solid fa-share-nodes fa-beat-fade fa-xs' style='display: none'></i>");
            $('.icon').fadeIn();

            open = false;
        }
    });
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


