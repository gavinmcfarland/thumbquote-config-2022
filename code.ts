async function main() {
   var frameNode = figma.createFrame()

   frameNode.resize(960, 480)

   var textNode = figma.createText()

   frameNode.appendChild(textNode)

   await figma.loadFontAsync(textNode.fontName)

   figma.showUI(__html__, { visible: false })

   figma.ui.onmessage = (msg) => {
      if (msg.type === "post-quote") {
         textNode.characters = msg.data

         textNode.x = (frameNode.width - textNode.width) / 2
         textNode.y = (frameNode.height - textNode.height) / 2
      }
   }

   await figma.setFileThumbnailNodeAsync(frameNode).then(() => {})

   figma.closePlugin()
}

main()
