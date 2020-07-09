var canvas = canvastools('canvas')

function draw() {
    canvas
        .iterate((data, red, green, blue, alpha) => {
            var color = Math.random() > 0.5 ? 255 : 0
            data[red] = color
            data[green] = color
            data[blue] = color
            data[alpha] = 255
        })
        .animate(draw)
}

canvas.animate(draw)