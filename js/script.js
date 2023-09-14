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
    // Get the input value from the search box
    var searchValue = document.getElementById("searchInput").value.toLowerCase();

    // Get the selected category from the dropdown
    var selectedCategory = document.getElementById("mySelect").value;

    // Get all the product boxes
    var productBoxes = document.querySelectorAll(".product-box");

    // Loop through each product box and check if it matches the search criteria
    productBoxes.forEach(function (box) {
        var title = box.querySelector(".product-title").textContent.toLowerCase();
        var id = box.querySelector(".product-id").textContent.toLowerCase();

        // Check if the selected category is "All Products" or if the box matches the selected category
        if (selectedCategory === "all" || box.id === selectedCategory) {
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


// -------------------------------- select product  --------------------------------------




// -------------------------------- testing --------------------------------------

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
    } else {
      // Show the corresponding select-type element
      const selectedTypeElement = document.querySelector(`.select-${selectedValue}`);
      selectedTypeElement.style.display = 'block';
  
      // Automatically select the corresponding "All" option in the second select
      const clothesSelect = document.getElementById('clothes-select');
      const mugsSelect = document.getElementById('mugs-select');
      const phonesSelect = document.getElementById('phones-select');
      const kychainsSelect = document.getElementById('kychains-select');
      const bagsSelect = document.getElementById('bags-select');
      const pillowsSelect = document.getElementById('pillows-select');
      
      if (selectedValue === 'clothes') {
        clothesSelect.value = 'all-clothes';
      } else if (selectedValue === 'mugs') {
        mugsSelect.value = 'all-mugs';
      } else if (selectedValue === 'phones') {
        phonesSelect.value = 'all-phones';
      } else if (selectedValue === 'kychains') {
        kychainsSelect.value = 'all-kychains';
      } else if (selectedValue === 'bags') {
        bagsSelect.value = 'all-bags';
      } else if (selectedValue === 'pillows') {
        pillowsSelect.value = 'all-pillows';
      }
  
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
    }
  
    // Automatically set the clothes-select to "all-clothes"
    document.getElementById('clothes-select').value = 'all-clothes';
  
    // Close the product-select dropdown
    this.blur();
  });
  
  // Trigger the change event to initialize the filtering based on the initial selected option
  document.getElementById('product-select').dispatchEvent(new Event('change'));
