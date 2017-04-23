$(function() {

    var templateBranchSingle = '<div class="branch"></div>';
    var templateBranch = '<div class="branch"></div><div class="branch"></div><div class="branch"></div>';
    var templatePetal = '<div class="petal"></div>';
    var timer = 500;
    var maxCount = 4;
    var count = 0;

    function appendBranchs() {
        $('.branch:not(:has(*))').html(templateBranch);
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

    $('#bloom').html(templateBranchSingle);
    setAppendTimeout();
})();