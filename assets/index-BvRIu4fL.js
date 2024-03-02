(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}})();let myCodeMirror,errors;const CodeKey="code";function initCodeProcessing(){errors=document.getElementById("errors");const e=document.querySelector("#message");myCodeMirror=CodeMirror.fromTextArea(e,{mode:"javascript",theme:"panda-syntax"}),myCodeMirror.setSize(null,400);const o=new URLSearchParams(window.location.search),s=Object.fromEntries(o.entries());s.fetchCode?loadCodeFromParams(s):loadCodeFromStorage(),document.querySelector(".button.run").addEventListener("click",a=>{a.preventDefault(),executeCode()}),document.querySelector(".button.reset").addEventListener("click",a=>{a.preventDefault(),resetCode()})}function loadCodeFromParams(e){console.log("Loading code from: "+e.fetchCode),fetch(e.fetchCode).then(o=>o.text()).then(o=>{myCodeMirror.setValue(o),e.runCode==="true"&&(executeCode(),shrinkIntroSection())}).catch(o=>{myCodeMirror.setValue("// Could not load: "+e.fetchCode+`
// Error: `+o)})}function loadCodeFromStorage(){let e=window.localStorage.getItem(CodeKey);e?(console.log("Found code from a previous session"),myCodeMirror.setValue(e)):(console.log("Initializing code"),resetCode())}function resetCode(){loadCodeFromParams({fetchCode:"https://gist.githubusercontent.com/fmaylinch/03145a94a4a9e044f6f6e8888f2c9662/raw",runCode:"false"})}function executeCode(){document.querySelector(".button.reset").style.display="block",errors.innerText="";const code=myCodeMirror.getValue();window.localStorage.setItem(CodeKey,code);const codeAsFunction=`(codeMirror) => {
`+code+`
}`;try{const func=eval(codeAsFunction);func(myCodeMirror)}catch(e){console.log(e),errors.innerText=e}}function shrinkIntroSection(){$("#intro").animate({"min-height":"0"},1500)}function initTemplate(){(function(e){var o=e(window),s=e("body"),a=e("#sidebar");if(breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),browser.name=="ie"&&s.addClass("is-ie"),o.on("load",function(){window.setTimeout(function(){s.removeClass("is-preload")},100)}),e("form").on("click",".submit",function(t){t.stopPropagation(),t.preventDefault(),e(this).parents("form").submit()}),a.length>0){var i=a.find("a");i.addClass("scrolly").on("click",function(){var t=e(this);t.attr("href").charAt(0)=="#"&&(i.removeClass("active"),t.addClass("active").addClass("active-locked"))}).each(function(){var t=e(this),r=t.attr("href"),n=e(r);n.length<1||n.scrollex({mode:"middle",top:"-20vh",bottom:"-20vh",initialize:function(){n.addClass("inactive")},enter:function(){n.removeClass("inactive"),i.filter(".active-locked").length==0?(i.removeClass("active"),t.addClass("active")):t.hasClass("active-locked")&&t.removeClass("active-locked")}})})}e(".scrolly").scrolly({speed:1e3,offset:function(){return breakpoints.active("<=large")&&!breakpoints.active("<=small")&&a.length>0?a.height():0}}),e(".spotlights > section").scrollex({mode:"middle",top:"-10vh",bottom:"-10vh",initialize:function(){e(this).addClass("inactive")},enter:function(){e(this).removeClass("inactive")}}).each(function(){var t=e(this),r=t.find(".image"),n=r.find("img"),l;r.css("background-image","url("+n.attr("src")+")"),(l=n.data("position"))&&r.css("background-position",l),n.hide()}),e(".features").scrollex({mode:"middle",top:"-20vh",bottom:"-20vh",initialize:function(){e(this).addClass("inactive")},enter:function(){e(this).removeClass("inactive")}})})(jQuery)}document.querySelector("#app").innerHTML=`
    <div>
        <!-- Sidebar -->
        <section id="sidebar">
            <div class="inner">
                <nav>
                    <ul>
                        <li><a id="main-button" href="#main-section">Main</a></li>
                        <li><a id="play-button" href="#play-section">Play</a></li>
                    </ul>
                </nav>
            </div>
        </section>

    <!-- Wrapper -->
        <div id="wrapper">

            <!-- Intro -->
                <section id="main-section" class="wrapper style1 fullscreen fade-up">
                    <div class="inner">
                        <div id="main">
                            <h1 id="title">Hi, I'm <strong>Ferran</strong></h1>
                            <p id="text1">I love coding and teaching</p>
                            <p id="text2">Now I work at <a target="_blank" href="https://cloud.yandex.com/en/">Yandex Cloud</a></p>
                        </div>
                    </div>
                </section>

            <div id="errors"></div>

            <!-- Three -->
                <section id="play-section" class="wrapper style3 fade-up">
                    <div class="inner">
                        <div>
                            <ul class="actions">
                                <li><a href="#" class="button run submit">Run the code below</a></li>
                            </ul>
                        </div>
                        <form method="post" action="#">
                            <textarea name="message" id="message"></textarea>
                        </form>
                        <div>
                            <ul class="actions">
                                <li><a href="#" class="button reset">Reset code</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Social Networks</h3>
                            <ul class="icons">
                                <li><a target="_blank" href="https://github.com/fmaylinch" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/ferranmaylinch/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/fmaylinch/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                <li><a target="_blank" href="https://t.me/fmaylinch" class="icon brands fa-telegram"><span class="label">Telegram</span></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/user/ferranmaylinch" class="icon brands fa-youtube"><span class="label">Youtube</span></a></li>
                                <li><a target="_blank" href="https://twitter.com/ferranmaylinch" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                <li><a target="_blank" href="https://vk.com/fmaylinch" class="icon brands fa-vk"><span class="label">VK</span></a></li>
                            </ul>
                        </div>
                    </div>
                </section>

        </div>

    <!-- Footer -->
        <footer id="footer" class="wrapper style1-alt">
            <div class="inner">
                <div>
                    <ul class="menu">
                        <li>Template by <a target="_blank" href="http://html5up.net">HTML5 UP</a></li>
                        <li>Code editor by <a target="_blank" href="https://codemirror.net/">CodeMirror</a></li>
                        <li>Programming answers by <a target="_blank" href="https://stackoverflow.com/">StackOverflow</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
`;initTemplate();initCodeProcessing();
