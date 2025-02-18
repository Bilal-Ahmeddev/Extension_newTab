Chrome Extension: Live Age & Browser Time Tracker

This Chrome extension tracks your live age in years, days, and seconds, displays the current time in 12-hour format (HH:MM:SS AM/PM), and calculates the total time spent on the browser. Every time a new tab is opened, it shows an aesthetic background with motivational quotes.

Features

📅 Live Age Tracker: Displays your exact age in years, days, and seconds, updating every second.

⏳ Current Time (12-Hour Format): Shows real-time HH:MM:SS AM/PM format.

⌛ Browser Usage Tracker: Tracks total time spent on Chrome.

🖼 Aesthetic Background: Custom wallpaper for an improved user experience.

💬 Motivational Quotes: Random quotes appear on each new tab.

Installation Guide

1. Download the Extension Files

Clone the repository or Download as ZIP

Extract the ZIP file

2. Load the Extension in Chrome

Open Chrome

Go to chrome://extensions/

Enable Developer Mode (toggle at the top right)

Click "Load unpacked"

Select the extracted folder

Open a new tab → Your extension should be visible 🎉

File Structure

📂 Extension Folder
├── 📄 manifest.json       # Chrome extension configuration
├── 📄 index.html          # Redirects to newtab.html
├── 📄 newtab.html         # Main UI page
├── 📄 newtab.js           # Handles age, time, and browser tracking
├── 📄 background.js       # Background script (if needed)
├── 📂 assets/             # Wallpapers & icons
└── 📄 README.md           # This file

Troubleshooting

If the Extension Doesn't Load:

Make sure all files are in the same folder

Check manifest.json for correct file paths

Open chrome://extensions/ and Reload the extension

Open DevTools (F12 → Console) to check for errors

Future Improvements

✅ Add more customization options for wallpapers & quotes
✅ Improve UI with animations
✅ Option to reset or pause browser time tracking
