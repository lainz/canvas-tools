function canvastools(id) {
    var interface = {}
    var canvas = document.getElementById(id)
    var context = canvas.getContext('2d')

    interface.iterate = function (cb) {
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        for (var i = 0; i < imageData.data.length; i += 4) {
            cb(imageData.data, i, i + 1, i + 2, i + 3)
        }
        context.putImageData(imageData, 0, 0)
        return interface
    }

    interface.animate = function (cb) {
        window.requestAnimationFrame(cb)
        return interface
    }

    interface.canvas = canvas
    interface.context = context

    return interface
}