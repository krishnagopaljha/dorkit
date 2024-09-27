# Dork It

## Description

The Advanced Google Dorking Extension is a Chrome browser extension that allows users to perform advanced Google searches using dorking techniques. This extension provides a user-friendly interface to input various search parameters and execute queries directly from the browser toolbar.

## Features

- Input fields for `site`, `inurl`, `intext`, and other common Google dorking queries.
- Search functionality triggered by both a button click and the Enter key.
- Customizable design with a futuristic, hacking-themed UI.

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/krishnagopaljha/dorkit.git
   cd dorkit
   ```

2. **Load the Extension in Chrome**:

   - Open Chrome and navigate to chrome://extensions/.
   - Enable "Developer mode" (toggle switch at the top right).
   - Click on "Load unpacked" and select the extension's directory.

3. **Ensure File Structure**:

   - manifest.json: Extension manifest file.
   - popup.html: HTML file for the extension popup.
   - style.css: CSS file for styling the extension popup.
   - popup.js: JavaScript file handling the extension logic.
   - logo.png: Logo image for the extension.
  
 ## Usage


**Open the Extension**:
  Click on the extension icon in the Chrome toolbar to open the popup.

**Input Search Parameters**:
  Enter your desired search parameters in the input fields (e.g., site, inurl, intext).

**Execute Search**:
  Click the "Search" button or press the Enter key to perform the search.
  The query will be executed in a new tab with Google search results.
