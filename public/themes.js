document.addEventListener('DOMContentLoaded', function() {
    // Log for debugging
    console.log('DOM fully loaded');

    // Apply the previously selected theme (if any)
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' theme if none is saved
    document.body.setAttribute('data-theme', savedTheme);
    console.log(`Applied theme from storage: ${savedTheme}`);

    // Select all theme buttons
    const themeButtons = document.querySelectorAll('.apply-theme-btn');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the theme name from the data-theme attribute of the parent card
            const selectedTheme = button.closest('.theme-card').getAttribute('data-theme');
            console.log(`Button clicked for theme: ${selectedTheme}`);

            // Apply the theme to the body element
            document.body.setAttribute('data-theme', selectedTheme);

            // Store the selected theme in localStorage
            localStorage.setItem('theme', selectedTheme);
            console.log(`Theme applied: ${selectedTheme}`);
        });
    });
});


