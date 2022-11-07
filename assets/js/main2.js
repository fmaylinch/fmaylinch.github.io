let scrolledToIntro = false;

document.querySelector(".button.submit").addEventListener("click", function(e){
    e.preventDefault();    //stop form from submitting
    const code = document.querySelector("form textarea").value;
    console.log(code);
    const fullCode = "(document) => { " + code + " }";
    console.log(fullCode);
    const func = eval(fullCode);
    func(document);

    // Taken from main.js
    if (!scrolledToIntro) {
        var $sidebar = $('#sidebar');
        var $sidebar_a = $sidebar.find('a');
        $sidebar_a[0].click();
        scrolledToIntro = true;
    }
});