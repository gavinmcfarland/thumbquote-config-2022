figma.ui.onmessage = (msg) => {
   if (msg.type === "post-quote") {
      console.log(msg.data)
   }
}
