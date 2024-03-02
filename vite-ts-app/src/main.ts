import { setupCounter } from './counter.ts'
import './js/code.js'
import { initCodeProcessing } from "./js/code";
import { initTemplate } from "./js/main";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
                            <div id="message" style="max-height: 400px; overflow: auto"></div>
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
`
initTemplate();
initCodeProcessing();

if (false) { // the element #counter was from the example
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}
