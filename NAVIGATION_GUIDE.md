# Dynamic Navigation System for Learning Games

## Overview
This project now includes a **dynamic navigation system** that automatically creates a menu for switching between learning games. When you add new games, they are automatically added to the navigation menu!

## How It Works

### Navigation Files
- **`navigation.js`** - Centralized configuration file for all games
- **Navigation Bar** - Appears at the top of every page with links to all games

### Current Games
1. **🔤 Alphabet & Colors** (`index.html`) - Learn letters and colors with drag & drop
2. **🪐 Planets** (`planets.html`) - Explore our solar system with animated orbits
3. **🧬 Body Explorer** (`exploring_body.html`) - Learn about human body parts
4. **❄️ Frost Discovery** (`frost_discovery.html`) - Reveal and learn hidden items
5. **🎵 Music Hands** (`hand_music.html`) - Learn music with hand gestures
6. **🌈 Melt the Ice** (`melt_the_ice.html`) - Melt ice to discover pictures
7. **🧪 Science Lab** (`science-lab.html`) - Perform fun experiments

## Adding New Games

### Step 1: Create Your Game HTML File
Create a new HTML file in the project root directory (e.g., `my-game.html`)

### Step 2: Add Navigation Bar HTML
Add this code right after the `<body>` tag in your HTML file:

```html
<!-- Dynamic Navigation Bar -->
<div class="nav-bar">
    <div class="nav-container">
        <div class="nav-title">📚 Learning Games</div>
        <div class="nav-menu" id="navMenu"></div>
    </div>
</div>
```

### Step 3: Add Navigation CSS Styles
Add these styles to your CSS (before the closing `</style>` tag):

```css
/* Dynamic Navigation Bar */
.nav-bar {
    position: sticky;
    top: 0;
    z-index: 500;
    background: linear-gradient(135deg, #74B9FF 0%, #A29BFE 100%);
    padding: 15px 20px;
    margin-bottom: 20px;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.nav-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    white-space: nowrap;
}

.nav-menu {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
}

.nav-link {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    text-decoration: none;
    display: inline-block;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
}

.nav-link.active {
    background: white;
    color: #74B9FF;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
```

### Step 4: Add Navigation JavaScript
Add this code right after the opening `<script>` tag (before any other scripts):

```javascript
// ==================== DYNAMIC NAVIGATION SYSTEM ====================
// Configuration for available games
const GAMES_CONFIG = {
    'index.html': { name: '🔤 Alphabet & Colors', description: 'Learn letters and colors with drag & drop' },
    'planets.html': { name: '🪐 Planets', description: 'Explore our solar system' },
    'exploring_body.html': { name: '🧬 Body Explorer', description: 'Learn about human body parts' },
    'frost_discovery.html': { name: '❄️ Frost Discovery', description: 'Reveal and learn hidden items' },
    'hand_music.html': { name: '🎵 Music Hands', description: 'Learn music with hand gestures' },
    'melt_the_ice.html': { name: '🌈 Melt the Ice', description: 'Melt ice to discover pictures' },
    'science-lab.html': { name: '🧪 Science Lab', description: 'Perform fun experiments' },
    'your-game.html': { name: '🎮 Your Game Name', description: 'Your game description' }
};

// Initialize navigation
function initializeNavigation() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    navMenu.innerHTML = '';

    for (const [file, config] of Object.entries(GAMES_CONFIG)) {
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = file;
        link.textContent = config.name;
        link.title = config.description;

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
```

### Step 5: Update the Game Configuration
The easiest way is to update `GAMES_CONFIG` object in the JavaScript of each page to include your new game:

Add a new line:
```javascript
'your-game.html': { name: '🎮 Your Game Name', description: 'Your game description' }
```

## Features

✅ **Automatic Menu Generation** - No manual HTML editing needed
✅ **Active Link Highlighting** - Current page is highlighted in the menu
✅ **Responsive Design** - Works on mobile and desktop
✅ **Smooth Transitions** - Hover effects and animations
✅ **Easy to Extend** - Just add one line to GAMES_CONFIG to add a new game
✅ **Customizable Emojis** - Use any emoji to represent your game
✅ **Tooltips** - Hover over games to see their descriptions

## Customization

### Change Navigation Bar Colors
Modify these CSS variables:
```css
background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%);
```

### Change Active Link Color
Modify this CSS:
```css
.nav-link.active {
    background: white;
    color: #YOUR_COLOR;
}
```

### Add More Games
Simply add entries to the `GAMES_CONFIG` object:
```javascript
const GAMES_CONFIG = {
    // ... existing games ...
    'new-game.html': { name: '🎮 New Game', description: 'Description here' }
};
```

## File Structure
```
try-kishor/
├── index.html                 (Alphabet & Colors)
├── planets.html              (Planets)
├── exploring_body.html       (Body Explorer)
├── frost_discovery.html      (Frost Discovery)
├── hand_music.html           (Music Hands)
├── melt_the_ice.html         (Melt Ice)
├── science-lab.html          (Science Lab)
├── navigation.js             (Shared config - optional)
└── README.md                 (This file)
```

## Notes

- The navigation bar is **sticky**, so it stays at the top when scrolling
- The current page link is automatically highlighted with the `.active` class
- All games need the `<div class="nav-menu" id="navMenu"></div>` element for the menu to work
- Each game's navigation must include the GAMES_CONFIG object with the same entries

## Troubleshooting

**Navigation doesn't appear:**
- Make sure `<div id="navMenu"></div>` is in your HTML
- Check browser console for JavaScript errors
- Ensure `initializeNavigation()` is called on page load

**Active link not highlighting:**
- Check that file names exactly match those in GAMES_CONFIG
- Verify the CSS is properly loaded
- Check browser DevTools to see if `.active` class is applied

**Games not linking properly:**
- Verify file names match exactly (case-sensitive)
- Check that game files are in the same directory
- Ensure file extensions are correct (.html)
