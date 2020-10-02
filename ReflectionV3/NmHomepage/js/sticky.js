
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        $(".sticky-header").addClass("sticky-style");
        $(".sticky-header").removeClass("unstick");
    } else {
        $(".sticky-header").removeClass("sticky-style");
        $(".sticky-header").addClass("unstick");
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}