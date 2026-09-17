// ============================================
// SELECT HTML ELEMENTS
// ============================================

// Select the dropdown button
const dropdownButton =
    document.querySelector("#dropdownBtn");


// Select the dropdown menu
const dropdownMenu =
    document.querySelector("#dropdownMenu");


// Select the dropdown arrow
const dropdownArrow =
    document.querySelector("#dropdownArrow");



// ============================================
// DROPDOWN CLICK EVENT
// ============================================

// Check if the elements exist
if (
    dropdownButton &&
    dropdownMenu &&
    dropdownArrow
) {

    dropdownButton.addEventListener(
        "click",
        function (event) {

            // Prevent the click event from
            // reaching the document
            event.stopPropagation();


            // Show or hide the dropdown
            dropdownMenu.classList.toggle("show");


            // Check if the dropdown is open
            if (
                dropdownMenu.classList.contains("show")
            ) {

                // Change arrow to up
                dropdownArrow.textContent = "▲";

            } else {

                // Change arrow to down
                dropdownArrow.textContent = "▼";

            }

        }
    );



    // ============================================
    // BONUS:
    // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    // ============================================

    document.addEventListener(
        "click",
        function (event) {

            // Check if clicked area
            // is outside the dropdown
            if (
                !event.target.closest(".dropdown")
            ) {

                // Close dropdown
                dropdownMenu.classList.remove("show");


                // Reset arrow
                dropdownArrow.textContent = "▼";

            }

        }
    );



    // ============================================
    // CLOSE AFTER CLICKING A DROPDOWN ITEM
    // ============================================

    const dropdownLinks =
        document.querySelectorAll(
            "#dropdownMenu a"
        );


    dropdownLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    // Close the dropdown
                    dropdownMenu.classList.remove("show");


                    // Reset the arrow
                    dropdownArrow.textContent = "▼";

                }
            );

        }
    );

}