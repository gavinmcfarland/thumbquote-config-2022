var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var frameNode = figma.createFrame();
        frameNode.resize(960, 480);
        var textNode = figma.createText();
        frameNode.appendChild(textNode);
        yield figma.loadFontAsync(textNode.fontName);
        figma.showUI(__html__, { visible: false });
        figma.ui.onmessage = (msg) => {
            if (msg.type === "post-quote") {
                textNode.characters = msg.data;
                textNode.x = (frameNode.width - textNode.width) / 2;
                textNode.y = (frameNode.height - textNode.height) / 2;
            }
        };
        yield figma.setFileThumbnailNodeAsync(frameNode).then(() => { });
        figma.closePlugin();
    });
}
main();
