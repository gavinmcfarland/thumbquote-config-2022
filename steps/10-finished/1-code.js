async function main() {
   var frameNode = figma.createFrame()

   frameNode.resize(960, 480)

   frameNode.fills = [
      {
         type: "SOLID",
         color: {
            r: 255 / 255,
            g: 144 / 255,
            b: 255 / 255,
         },
      },
   ]

   var textNode = figma.createText()

   frameNode.appendChild(textNode)

   await figma.loadFontAsync(textNode.fontName)

   figma.showUI(__html__, { visible: false })

   figma.ui.onmessage = (msg) => {
      if (msg.type === "post-quote") {
         textNode.characters = msg.data

         textNode.resize(648, 106)
         textNode.fontSize = 44
         textNode.textAlignHorizontal = "CENTER"
         textNode.textAutoResize = "HEIGHT"

         textNode.x = (frameNode.width - textNode.width) / 2
         textNode.y = (frameNode.height - textNode.height) / 2
      }
   }

   await figma.setFileThumbnailNodeAsync(frameNode).then(() => { })

   figma.closePlugin()
}

main()
