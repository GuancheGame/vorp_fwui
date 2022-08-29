function toggleAccordian() {

    // Get the Siblings
    var getSiblings = function(elem) {
        // Setup siblings array and get the first sibling
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
        return siblings;
    };

    // store elements by class and pass parameter's for accordion settings
    var accordionItem = document.getElementsByClassName('accordion-item');
    var accordionTitle = document.getElementsByClassName('accordion-title');
    var OpenFirst = false; // (true / false)
    var OpenAlternate = true; // (true / false)

    for (var i = 0; i < accordionTitle.length; i++) {
        if (OpenFirst) {
            accordionItem[0].classList.add("accordion-open");
            accordionItem[0].classList.add("active");
        }
        accordionTitle[i].addEventListener('click', toggleItem, false);
    }

    // Call toggle function on Click
    function toggleItem() {
        var parentItem = this.parentNode;
        parentItem.classList.toggle("accordion-open");
        parentItem.classList.toggle("active");
        if (OpenAlternate) {
            var siblings = getSiblings(parentItem);
            for (i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove("accordion-open");
                siblings[i].classList.remove("active");
            }
        }
    }
    
} toggleAccordian();