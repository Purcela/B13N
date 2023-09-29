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

// -----------------------------  search ----------------------------

function searchByID() {
    // Get the input value from the search box and trim it
    var searchValue = document.getElementById("searchInput").value.toLowerCase().trim();

    // Get the selected category from the dropdown
    var selectedCategory = document.getElementById("product-select").value;

    // Get all the product boxes
    var productBoxes = document.querySelectorAll(".product-box");

    // Loop through each product box and check if it matches the search criteria
    productBoxes.forEach(function (box) {
        var title = box.querySelector(".product-title").textContent.toLowerCase();
        var id = box.querySelector(".product-id").textContent.toLowerCase();

        // Check if the selected category is "all" or if the box matches the selected category
        if (selectedCategory === "all" || box.getAttribute('data-value').includes(selectedCategory)) {
            if (title.includes(searchValue) || id.includes(searchValue)) {
                box.style.display = "flex"; // Show the box
            } else {
                box.style.display = "none"; // Hide the box
            }
        } else {
            box.style.display = "none"; // Hide the box if it doesn't match the selected category
        }
    });
}


function mySelect() {
    // Call the search function when the category dropdown changes
    searchByID();
}

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

//-------------------------------- device share --------------------------------

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

// ------------------------------ pc share -----

$(document).ready(function() {
    var open = false;

    // Click event on the container and the document
    $(document).on('click', function(event) {
        if ($(event.target).closest('.container').length) {
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
        } else if (open) {
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


// -------------------------------- sorting product  --------------------------------------

// Add a change event listener to the product-select element
document.getElementById('product-select').addEventListener('change', function () {
    const selectedValue = this.value;
    const productBoxes = document.querySelectorAll('.product-box');
  
    // Hide all product boxes initially
    productBoxes.forEach(function (box) {
      box.style.display = 'none';
    });
  
    // Hide all select-type elements
    const selectTypes = document.querySelectorAll('.select-type');
    selectTypes.forEach(function (selectType) {
      selectType.style.display = 'none';
    });
  
    // Show the product boxes based on the selected option
    if (selectedValue === 'all') {
      productBoxes.forEach(function (box) {
        box.style.display = 'flex';
      });
      // Display the "something" select element
      document.getElementById('something').style.display = 'block';
    } else {
      // Hide the "something" select element
      document.getElementById('something').style.display = 'none';

      // Show the corresponding select-type element
      const selectedTypeElement = document.querySelector(`.select-${selectedValue}`);
      selectedTypeElement.style.display = 'block';

      // Add change event listeners to the corresponding select-type elements
      selectedTypeElement.addEventListener('change', function () {
        const selectedType = this.value;
  
        // Hide all product boxes first
        productBoxes.forEach(function (box) {
          box.style.display = 'none';
        });
  
        // Show the product boxes with values that contain the selected type
        productBoxes.forEach(function (box) {
          const boxValues = box.getAttribute('value');
          if (boxValues && boxValues.split(' ').includes(selectedType)) {
            box.style.display = 'flex';
          }
        });
      });
      
      // Show all product boxes with the same selectedValue
      productBoxes.forEach(function (box) {
        const boxValues = box.getAttribute('value');
        if (boxValues && boxValues.split(' ').includes(selectedValue)) {
          box.style.display = 'flex';
        }
      });
    }
  
    // Automatically set the clothes-select to "all-clothes"
    document.getElementById('clothes-select').value = 'all-clothes';
  
    // Close the product-select dropdown
    this.blur();
  });
  
// Trigger the change event to initialize the filtering based on the initial selected option
document.getElementById('product-select').dispatchEvent(new Event('change'));


// Add a change event listener to the product-select element
document.getElementById('product-select').addEventListener('change', function () {
    const selectedValue = this.value;
    const productBoxes = document.querySelectorAll('.product-box');

    // Show all product boxes if "all" is selected
    if (selectedValue === 'all') {
        productBoxes.forEach(function (box) {
            box.style.display = 'flex';
        });
    } else {
        // Hide all product boxes initially
        productBoxes.forEach(function (box) {
            box.style.display = 'none';
        });

        // Show the product boxes with the selectedValue
        productBoxes.forEach(function (box) {
            const boxValues = box.getAttribute('value');
            if (boxValues && boxValues.includes(selectedValue)) {
                box.style.display = 'flex';
            }
        });
    }
    
    // Automatically set the "something" select to "choose" when not selecting "all"
    if (selectedValue === 'all') {
        document.getElementById('somthing');
    } else {
        document.getElementById('somthing');
    }

    // Close the product-select dropdown
    this.blur();
});

// Trigger the change event to initialize the filtering based on the initial selected option
document.getElementById('product-select').dispatchEvent(new Event('change'));

// -------------------------------- Gallery zoom --------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('[data-enlargable]');
    const modal = document.querySelector('#fullscreen-image');
    const modalImg = document.getElementById('zoomed-img');
    const closeFullscreenBtn = document.querySelector('#close-fullscreen');
    const prevFullscreenBtn = document.querySelector('#prev-fullscreen');
    const nextFullscreenBtn = document.querySelector('#next-fullscreen');
    let currentIndex = 0;
    let isZoomed = false;
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = image.src;
            currentIndex = index;
        });
    });
    closeFullscreenBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.classList.remove('zoomed');
        isZoomed = false;
    });
    prevFullscreenBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            modalImg.src = images[currentIndex].src;
        }
    });
    
    nextFullscreenBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            modalImg.src = images[currentIndex].src;
        }
    });
});

// -------------------------------- create --------------------------------------

