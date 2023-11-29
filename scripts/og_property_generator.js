// Get the current day of the week
const dayOfWeek = new Date().getDay();

// Define the image URLs for each day of the week
const imageUrls = [
    "https://example.com/sunday.jpg",
    "https://example.com/monday.jpg",
    "https://example.com/tuesday.jpg",
    "https://example.com/wednesday.jpg",
    "https://example.com/thursday.jpg",
    "https://example.com/friday.jpg",
    "https://example.com/saturday.jpg"
];

// Define the titles for each day of the week
const siteTitles = [
    "Happy Sunday! The new week starts tomorrow!",
    "Happy Monday! The start of a new week!",
    "Happy Tuesday! Not quite the middle of the week yet!",
    "Happy Wednesday! Half way there!",
    "Happy Thursday! Almost there!",
    "Happy Friday! The weekend is almost here!",
    "Happy Saturday! The weekend is here!"
];

// Get the image URL based on the day of the week
const imageUrl = imageUrls[dayOfWeek];

// Get the title based on the day of the week
newTitle = "Xander Reyes | " + siteTitles[dayOfWeek];

// Set the og:title property to the title
document.querySelector('meta[property="og:image"]').setAttribute('content', newTitle);

// Set the og:image property to the imageUrl
document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);

