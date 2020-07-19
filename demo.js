var canvas = canvastools('canvas')

function draw() {
    canvas
        /*.iterate((pixels, red, green, blue, alpha) => {
            var color = Math.random() > 0.5 ? 255 : 0
            pixels[red] = color
            pixels[green] = color
            pixels[blue] = color
            pixels[alpha] = 255
        })*/
        .iterate2d((pixels, red, green, blue, alpha, x, y) => {
            var color = 0
            if (y % 2 == 0) {
                color = Math.random() > 0.5 ? 255 : 0
            }
            pixels[red] = color
            pixels[green] = color
            pixels[blue] = color
            pixels[alpha] = 255
        })
        .animate(draw)
}

canvas.animate(draw)