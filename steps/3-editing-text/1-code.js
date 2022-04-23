var frameNode = figma.createFrame()

frameNode.name = "Thumbnail"
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

frameNode.append(textNode)

textNode.characters = "I love Figma";
