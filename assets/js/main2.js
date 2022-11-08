let scrolledToIntro = false;

document.querySelector(".button.submit").addEventListener("click", function(e){
    e.preventDefault();    //stop form from submitting
    if (!scrolledToIntro) {
        var $sidebar = $('#sidebar');
        var $sidebar_a = $sidebar.find('a');
        $sidebar_a[0].click();
        scrolledToIntro = true;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let timeout = scrollTop === 0 ? 0 : 1000;
        setTimeout(applyUpdates, timeout);
        // shrink intro section
        setTimeout( () => {
            $( "#intro" ).animate({'min-height': '0'}, 1500);
        }, 3000);
    } else {
        applyUpdates();
    }
});

function applyUpdates() {
    const code = document.querySelector("form textarea").value;
    const fullCode = "(document) => { " + code + " }";
    const func = eval(fullCode);
    func(document);
}
