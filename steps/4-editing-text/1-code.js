async function main() {
   var textNode = figma.createText();

   await figma.loadFontAsync(textNode.fontName);

   textNode.characters = "test";
}

main();
