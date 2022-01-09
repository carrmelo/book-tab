# book-tab version 0.1

- [About](#about)
- [Developer mode](#developer-mode)
- [Next steps](#next-steps)

## About

This is a basic chrome extension to save and close all tabs in the current active window

Bookarks will be created in the "Other bookmarks", under a folder with the specified name, if no name is specified, the current date and time will be the title

## [Developer mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)

The directory holding the manifest file can be added as an extension in developer mode in its current state.

- Open the Extension Management page by navigating to chrome://extensions.
  - Alternatively, open this page by clicking on the Extensions menu button and selecting **Manage Extensions** at the bottom of the menu.
  - Alternatively, open this page by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**
- Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
- Click the **Load unpacked** button and select the extension directory.

![Loading an unpacked extension](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format&w=1126)

Ta-da! The extension has been successfully installed. Because no icons were included in the manifest, a generic icon will be created for the extension.

## Next steps

- Option to save the folder in the bookmarks tab
- Option to review the tabs before saving/closing
- Option to rename the tabs title
- Option to save the bookmarks in existing folder
