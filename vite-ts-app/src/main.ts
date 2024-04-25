import { setupCounter } from './counter.ts'
import './js/code.js'
import { initCodeProcessing } from "./js/code";
import { initTemplate } from "./js/main";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <div id="wrapper">
            <section id="main-section" class="wrapper style1 fullscreen fade-up">
                <div class="inner">
                    <div id="main">
                        <div class="padded">
                            <h1>Привет, I'm <strong>Ferran</strong></h1>
                            <p>I love coding and teaching. Now I work at <a target="_blank" href="https://cloud.yandex.com/en/">Yandex Cloud</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="errors"></div>

            <section id="play-section" class="wrapper style3 fade-up">
                <div class="inner">
                    <div class="padded">
                        <ul class="actions">
                            <li><a href="#" class="button run submit">Run the code below</a></li>
                        </ul>
                    </div>
                    <form method="post" action="#">
                        <div id="message" style="max-height: 400px; overflow: auto;"></div>
                    </form>
                    <div class="padded">
                        <ul class="actions">
                            <li><a href="#" class="button reset">Reset code</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <footer id="footer" class="wrapper style1-alt">
            <div class="inner">
                    <div class="padded">
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
                <div class="padded">
                    <ul class="menu">
                        <li>Code editor by <a target="_blank" href="https://codemirror.net/">CodeMirror</a></li>
                        <li>Javascript transpilation by <a target="_blank" href="https://babeljs.io/">Babel</a></li>
                        <li>Coding help by <a target="_blank" href="https://stackoverflow.com/">StackOverflow</a>
                            and some LLMs like <a target="_blank" href="https://chat.mistral.ai/chat">Mistral</a>
                        </li>
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
