// Size of browser viewport.
// browserHeight = $(window).height();
// browserWidth = $(window).width();

// console.log(browserHeight, browserWidth)

// https://github.com/russellgoldenberg/scrollama

var scrolly = d3.select("#scrolly");
var article = scrolly.select("article");
var step = article.selectAll(".step");

var scroller = scrollama();
var scrollerCounter = scrollama();
var scrollstart = null;
var scrollend = null;

// handle element when scrolling down
// response contains all the info about the dom element
function handleStepEnter(response) {
    // select element to use in s3
    var el = d3.select(response.element);

    // make element appear/fade in
    el
        .transition()
        .duration(1000)
        .style("opacity", 1)

    if (scrollstart == null) {
        scrollstart = Date.now()
    }

    if (response.index == 6) {

    }
}

// handle when reaching bottom of element
function handleStepExit(response) {
    // handle when scrolling up
    if (response.direction === 'up') {
        // select element to use in s3
        var el = d3.select(response.element);

        // make element disappear/fade out
        el
            .transition()
            .duration(400)
            .style("opacity", 0)
    }


}

var index = -1

function handleStepProgress(response) {
    // select elements that should have a running counter to show progress (#million/#milliarde)
    if (d3.select(response.element).classed("show-progress")) {
        var amount
        if (response.index == 0) {
            amount = 1325000
        }
        if (response.index == 1) {
            // 41.5 billion
            amount = 41500000000
        }
        // convert div size to corresponding to euro
        var betrag = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(response.progress * amount)
            // select the cash counter and print the text
        d3.select("#scroll-indicator").text(betrag);

    }




    //console.log(el.progress)
    //el.select(".progress").text(d3.format(".8%")(response.progress))
}

// define element that scroller is watching
scroller.setup({
    step: '.step',
    progress: true,
    // debugger shows the trigger line for when elements are reached
    //debug: true,
    // offset - where in the screen does the element appear/change
    // 0 is top of screen, 1 bottom
    offset: 0.80
}).onStepEnter(handleStepEnter).onStepExit(handleStepExit).onStepProgress(handleStepProgress);

// define element that scroller is watching
scrollerCounter.setup({
    step: '.step-counter',
    progress: true,
    // debugger shows the trigger line for when elements are reached
    // debug: true,
    // offset - where in the screen does the element appear/change
    // 0 is top of screen, 1 bottom
    offset: 0.67
}).onStepEnter(handleStepEnter).onStepExit(handleStepExit).onStepProgress(handleStepProgress);

// setup resize event
window.addEventListener("resize", scroller.resize);