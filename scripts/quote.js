// The function that runs when the window loads
window.onload = async () => {
    // Fetch the quotes from the file
    const response = await fetch('quotes.txt');
    // Convert the response to text
    const text = await response.text();
    // Split the text into lines
    const lines = text.split('\n');
    // Split each line into parts (separated by commas) and store them as quotes
    const quotes = lines.map(line => line.split(','));
    // Select a random quote
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // Get the quoteBox element
    const quoteBox = document.getElementById('quoteBox');
    // Clear the quoteBox
    quoteBox.innerHTML = '';

    // Iterate over each part of the quote
    quote.forEach((line, index) => {
        // Create a new h1 element
        const h1 = document.createElement('h1');
        // Set the text of the h1 element to the part of the quote
        // If it's the last part of the quote (the author), add a dash before it
        h1.textContent = (index === quote.length - 1) ? `- ${line}` : line;
        // Set the class of the h1 element
        // If it's the last part of the quote (the author), use a different class
        h1.className = (index === quote.length - 1) ? "text-xl my-3 lg:text-2xl" : "text-2xl my-3 lg:text-4xl";
        // Set the id of the h1 element
        // If it's the last part of the quote (the author), use 'QuoteAuthor' as the id
        // Otherwise, use 'Quoteline' followed by the index + 1
        h1.id = (index === quote.length - 1) ? 'QuoteAuthor' : `Quoteline${index + 1}`;
        // Append the h1 element to the quoteBox
        quoteBox.appendChild(h1);
    });
};
