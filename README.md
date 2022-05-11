# Thumbquote Config 2022

Creating a plugin doesn't have to be complicated. In my talk Demystifying Plugin Development I walk through all the steps for creating a plugin that sets a random quote as a thumbnail. Use this repo to have a look at what we covered in my talk.

## No setup required

If you just want to play around with the code without any extra setup.

1. Download this repo from Github
2. Install the Figma desktop app
3. Open a new file
4. Open the Quick Actions Menu (`cmd/ctrl + /`)
5. Search for "Import plugin from manifest"
6. Select the `manifest.json` file
7. To test it, search for `Thumbquote Config 2022` from the quick actions menu.

Open the `code.js` file and edit it to play around with the code. I suggest using [Visual Studio Code](https://code.visualstudio.com/).

## More advanced setup

In my talk, I show how you can use the await keyword to make your code a bit cleaner. To do this we need to install a tool that will convert our code into a format that Figma will understand. There are a couple of ways to do this, but a simple way to manage this is by installing TypeScript.

1. **Install Node.js**

   Visit https://nodejs.org/en/download/ and download and install Node.js. This is so we can install node packages like TypeScript.

2. **Install TypeScript**

   Using a terminal app run the following command to install TypeScript globally (Visual Studio Code has a built-in terminal. Just press `ctrl + ~`).

   ```bash
   sudo npm install -g typescript
   ```

3. **Install type definitions**

   Run the following in the terminal. This is to avoid getting syntax highlighting errors using the Figma API.

   ```bash
   npm install @figma/plugin-typings --save-dev
   ```

4. **Edit the code.ts file**

   Now edit the `code.ts` file (instead of `code.js`).

4. **Rebuild the file**

   To preview your changes, open the terminal app and run

   ```
   npm run build
   ```

5. **Now run the plugin**

   You can re-run the plugin in Figma by pressing `cmd/ctrl + P`


When you're developing you can run `npm run watch` instead and this will watch for any changes to your `code.ts` file so you don't have to keep running the build command.

For more advice please follow the [Figma API Setup Guide](https://www.figma.com/plugin-docs/setup/).

## Other useful links

- [MDN JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) - A good intro into the basics of JavaScript
- [Codecadamy](https://www.codecademy.com/) - A great place to level up your JavaScript, HTML and CSS skills
- [Fish Shell](https://fishshell.com/) - Provides syntax highlighting for the terminal and makes it a bit easier to use
- [Figma Plugin Samples](https://github.com/figma/plugin-samples) - Other Figma plugin and widget examples
- [Fignite Helpers](https://github.com/fignite/helpers) - A collection of useful functions for Figma plugins


