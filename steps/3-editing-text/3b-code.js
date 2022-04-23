async function main() {
   // ...

   await figma.loadFontAsync(textNode.fontName);

   textNode.characters = "I love Figma";
}

main();
