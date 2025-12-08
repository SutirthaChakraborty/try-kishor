// ==================== DYNAMIC NAVIGATION SYSTEM ====================
// Configuration for available games - Add new games here!
const GAMES_CONFIG = {
    'index.html': { name: '🔤 Alphabet & Colors', description: 'Learn letters and colors with drag & drop' },
    'planets.html': { name: '🪐 Planets', description: 'Explore our solar system' },
    'exploring_body.html': { name: '🧬 Body Explorer', description: 'Learn about human body parts' },
    'frost_discovery.html': { name: '❄️ Frost Discovery', description: 'Reveal and learn hidden items' },
    'hand_music.html': { name: '🎵 Music Hands', description: 'Learn music with hand gestures' },
    'melt_the_ice.html': { name: '🌈 Melt the Ice', description: 'Melt ice to discover pictures' },
    'science-lab.html': { name: '🧪 Science Lab', description: 'Perform fun experiments' }
};

// Initialize navigation
function initializeNavigation() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return; // Navigation menu not found

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // Clear existing menu
    navMenu.innerHTML = '';

    // Create links for each game
    for (const [file, config] of Object.entries(GAMES_CONFIG)) {
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = file;
        link.textContent = config.name;
        link.title = config.description;

        // Mark current page as active
        if (currentFile === file || (currentFile === '' && file === 'index.html')) {
            link.classList.add('active');
        }

        navMenu.appendChild(link);
    }
}

// Initialize navigation when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
});
