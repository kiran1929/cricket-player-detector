# Cricket Player Detector 🏏

An interactive web application that detects and displays cricket player names when you click on their faces in a team photo.

## Features ✨

- **Interactive Click Detection**: Click on any player's face in the image to display their name and position
- **Responsive Design**: Works seamlessly across different screen sizes and window dimensions
- **Percentage-Based Coordinates**: Uses percentage-based click detection for accurate tracking regardless of image scaling
- **Styled UI**: Modern gradient design with smooth hover effects and transitions
- **Player Information**: Displays player name along with their role in the team

## How It Works 🎯

1. The application loads a cricket team photo
2. Click on any player's face in the image
3. The player's name and position will be displayed in the styled text box below
4. Each player has a specific clickable zone that corresponds to their face

## Players Included 🏏

- 🏏 Shubman Gill - Opening Batsman
- 🏏 Hardik Pandya - All-rounder
- 🏏 Rishab Pant - Wicket Keeper
- 🏏 Shreyas Iyer - Middle Order
- 🏏 Riyan Parag - All-rounder
- 🏏 Ruturaj Gaikwad - Opening Batsman
- 🏏 Ishan Kishan - Left-handed Batsman
- 🏏 Rajath Patidar - Middle Order
- 🏏 Axar Patel - All-rounder
- 🏏 Ajinkya Rahane - Senior Batsman

## Files 📁

- `cricket-player-detector.html` - Main HTML file with styling
- `cricket-player-detector.js` - JavaScript file containing click detection logic

## Usage 🚀

1. Open `cricket-player-detector.html` in your web browser
2. Click on any player's face in the image
3. The player's name and role will appear in the styled box below the image

## Technical Details 💻

### Click Detection Algorithm
- Uses **percentage-based coordinates** instead of fixed pixels
- Calculates click position as a percentage of image dimensions
- Works correctly even when the image is resized or the browser window changes size

### HTML Structure
```html
<img src="./public/images/658374497_18584999392048552_2915999388210863805_n.jpg" alt="" height="700px" width="100%">
<p id="res">hello</p>
```

### JavaScript Implementation
- Event listener on image click
- Checks click coordinates against predefined zones for each player
- Updates the `<p>` element with player information

## Styling 🎨

The application includes:
- Gradient background (purple to pink)
- Rounded corners and shadow effects
- Smooth transitions and hover effects
- Responsive typography

## Browser Compatibility ✅

- Chrome/Edge
- Firefox
- Safari
- Any modern browser supporting ES6 JavaScript

## Notes 📝

- The image needs to be in the `public/images/` directory
- Click zones are calibrated for the specific image used
- Works responsively with different browser sizes and zoom levels

## Future Enhancements 🔮

- Add more teams/players
- Add player statistics display
- Implement touch support for mobile devices
- Add sound effects on player click
- Store player data in a JSON file for easier management

---

**Created by**: Kiran Deepen Gudepu  
**Date**: March 31, 2026
