// Main script for the site

// Define the changeEpisode function
function changeEpisode(change) {
    // Update the src attribute of the iframe element
    document.getElementById('episode').src = change;
}

// // Kami-tachi ni Hirowareta Otoko function
// document.addEventListener('DOMContentLoaded', function () {
//     // Define a function that updates the innerText of the h4 element
//     function updateHeading(episode) {
//         // Get a reference to the h4 element
//         const heading = document.getElementById('changeChapter');

//         // Update the innerText of the h4 element
//         heading.textContent = `Kami-tachi ni Hirowareta Otoko ${episode} English Subbed by Projyanime`;
//     }

//     // Get a reference to the li elements
//     const liElements = document.querySelectorAll('a');

//     // Loop through the li elements
//     for (const li of liElements) {
//         // Add an event listener to the li element that listens for the click event
//         li.addEventListener('click', event => {
//             // Get the text content of the clicked li element
//             const episode = event.target.textContent;
          
//             // Update the innerText of the h4 element, passing the episode as an argument
//             updateHeading(episode);
//             // Get the data-url attribute of the clicked li element
//             const url = event.currentTarget.getAttribute('data-url');

//             // Change the episode, passing the url as an argument
//         });
//     }
// });

// // Kenja no Mago function
// document.addEventListener('DOMContentLoaded', function () {
//     // Define a function that updates the innerText of the h4 element
//     function updateHeading2(episode) {
//         // Get a reference to the h4 element
//         const heading = document.getElementById('changeChapter2');

//         // Update the innerText of the h4 element
//         heading.textContent = `Kenja no Mago ${episode} English Subbed by Projyanime`;
//     }

//     // Get a reference to the li elements
//     const liElements = document.querySelectorAll('a');

//     // Loop through the li elements
//     for (const li of liElements) {
//         // Add an event listener to the li element that listens for the click event
//         li.addEventListener('click', event => {
//             // Get the text content of the clicked li element
//             const episode = event.target.textContent;
          
//             // Update the innerText of the h4 element, passing the episode as an argument
//             updateHeading2(episode);
//             // Get the data-url attribute of the clicked li element
//             const url = event.currentTarget.getAttribute('data-url');

//             // Change the episode, passing the url as an argument
//         });
//     }
// });




// // Convert youtube links.
// function extractVideoID(url) {
//     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
//     var match = url.match(regExp);
//     if (match && match[7].length == 11) {
//         return match[7];
//     } else {
//         alert("Could not extract video ID.");
//     }
// }


// // send the user to the clicked episode
// function redirect(link) {
//     location.assign(link);
// }


export default changeEpisode