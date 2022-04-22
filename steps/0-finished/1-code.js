async function main() {
   var frameNode = figma.createFrame()

   frameNode.resize(960, 480)

   var textNode = figma.createText()

   frameNode.appendChild(textNode)

   textNode.x = (frameNode.width - textNode.width) / 2
   textNode.y = (frameNode.height - textNode.height) / 2

   await figma.loadFontAsync(textNode.fontName);

   figma.ui.onmessage = (msg) => {
      if (msg.type === "post-quote") {
         textNode.characters = msg.data
      }
   }

   await setFileThumbnailNodeAsync(frameNode).then(() => { })

   figma.closePlugin()

}

main();



