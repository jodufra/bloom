$(function() {

    var templateBranch = '<div class="branch"></div>';
    var templateBranchs = templateBranch + templateBranch + templateBranch;
    var templatePetal = '<div class="petal"></div>';

    var timer = 250;
    var maxCount = 4;

    var count = 0;

    function appendBranchs() {
        $('.branch:not(:has(*))').html(templateBranchs);
        count++;
        setAppendTimeout();
    }

    function appendPetals() {
        $('.branch:not(:has(*))').html(templatePetal);
    }

    function setAppendTimeout() {
        if (count < maxCount) {
            setTimeout(appendBranchs, timer);
        } else {
            setTimeout(appendPetals, timer);
        }
    }

    $('#bloom').html(templateBranch);
    setAppendTimeout();
})();