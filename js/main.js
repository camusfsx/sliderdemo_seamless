window.onload = () => {
    setInit.call()
    setTimer.call()
}
$(`.imgWindow`).on(`mouseenter`, () => {
    window.clearInterval(timer)
}).on(`mouseleave`, () => {
    setTimer.call()
})
function setInit() {
    $(`.imgWindow>li`).addClass(`onReady`)
    $(`.imgWindow>:first-child`).removeClass(`onReady`).addClass(`onStay`)
    $(`.imgWindow>:last-child`).removeClass(`onReady`).addClass(`onOut`)
}
function setTimer() {
    return timer = setInterval(() => {
        $(`.onOut`).addClass(`onReady`).removeClass(`onOut`)
        if ($(`.onStay`).index() !== $(`.imgWindow>:last-child`).index()) {
            $(`.onStay`).addClass(`onOut`).removeClass(`onStay`).next(`.onReady`).addClass(`onStay`).removeClass(`onReady`)
        } else {
            $(`.onStay`).addClass(`onOut`).removeClass(`onStay`)
            $(`.imgWindow>:first-child`).removeClass(`onReady`).addClass(`onStay`)
        }
    }, 1000)
}

