// We create the frame for our thumbnail
var frameNode = figma.createFrame()

// Set the name to "Thumbnail"
frameNode.name = "Thumbnail"

// We can't edit the height and width property because they are readonly properties, so we have to use the resize method
frameNode.resize(960, 480)

// We change the fill by replacing the whole array of fills with a new array
frameNode.fills = [
	{
		type: "SOLID",
		color: {
			r: 255 / 255, // To work out the percentage (as a decimal), we divide our RGB value by the maximum value which is 255
			g: 144 / 255,
			b: 255 / 255,
		},
	},
]

// Create the textNode for our text
var textNode = figma.createText()

// We use an async function to load the font before changing the characters of the node
figma.loadFontAsync(textNode.fontName).then(() => {

	// We show our html and set it to be invisible
	figma.showUI(__html__, { visible: false })

	figma.ui.onmessage = (msg) => {
		if (msg.type) {
			// When we receive the message from our UI we can set the characters
			textNode.characters = msg.data

			// Now we nest it inside our frame
			frameNode.appendChild(textNode)

			// Resize it and change the font size, alignment etc
			textNode.resize(648, 106)
			textNode.fontSize = 44
			textNode.textAlignHorizontal = "CENTER"
			textNode.textAutoResize = "HEIGHT"

			// We center it inside the frame by calulating the center point minus the width or height of the node we're tyring to center
			textNode.x = (frameNode.width - textNode.width) / 2
			textNode.y = (frameNode.height - textNode.height) / 2
		}
	}

	// We set the frame to be the thumbnail so it appears in our list of files
	figma.setFileThumbnailNodeAsync(frameNode).then(() => {

		// Now we can close the plugin
		figma.closePlugin("Thumbquote set")
	})
})
