import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
			
			<h2>Algorithm Skills FAQ</h2>

			<h3>What is Web Skills?</h3>
			<p>Web Skills is a visual overview of useful skills to learn as a web developer. It is useful for people who just started learning about web development and for people who have been in the field for years and want to learn new things. As a beginner, I would encourage you not to see this website as the definitive list of what you need to know but as an example of what you can learn and where you can start. The skills are arranged in chronological order based on what learning path I recommend you to take but feel free to jump around freely.</p>

			<h3>알고리즘은 어떤 순서로 배우는 게 좋나요?</h3>
			
			<p>
			&nbsp&nbsp01. STL 1: 기초 자료구조 (큐, 스택, 힙, 벡터, 데큐, 맵, 셋 ...) <br>
			&nbsp&nbsp02. STL 2: 기초 알고리즘 (이분 탐색, 정렬, ...) <br>
			&nbsp&nbsp03. 그래프 1: BFS, DFS <br>
			&nbsp&nbsp04. 전수탐색과 재귀호출 <br>
			&nbsp&nbsp05. Greedy 기초 <br>
			&nbsp&nbsp06. Dijkstra, Floyd, 벨만-포드 <br>
			&nbsp&nbsp07. DP 1 <br>
			&nbsp&nbsp08. 문자열 기초 (KMP, Manacher) <br>
			&nbsp&nbsp09. 수학 1: 정수론 기초 <br>
			&nbsp&nbsp10. DP 2: 다차원, 메모이제이션, 분할정복 <br>
			&nbsp&nbsp11. 기하 기초 <br>
			&nbsp&nbsp12. 그래프 2: SCC, 2-SAT <br>
			&nbsp&nbsp13. DP 3: 비트마스크, 기댓값 <br>
			&nbsp&nbsp14. Network Flow, 이분 매칭 <br>
			&nbsp&nbsp15. Segment Tree와 BIT (+ 2D BIT) <br>
			&nbsp&nbsp16. 문자열 응용 (아호 코라식, Suffix Array) <br>
			&nbsp&nbsp17. MCMF <br>
			&nbsp&nbsp18. DP 4: Knuth, CHT, D&C / 아호코라식 DP / 메모리 사용량 줄이기 등 비정형 문제 <br>
			&nbsp&nbsp19. Segment Tree 2: Lazy 이용, Persistent Segment Tree, 2D Segment Tree, Quad Tree<br>
			&nbsp&nbsp20. 수학 2: FFT<br>
			&nbsp&nbsp21. BBST (Splay tree) 응용, Link-cut tree, ...
			</p>

			<h3>How can I support you?</h3>
			<p>I am spending my spare time building Web Skills for free because I want to help people get into web development. My motivation comes from people finding Web Skills useful, so if you like the project feel free to support me in any way you like! For example, you are more than welcome to become a <a target="_blank" href="https://github.com/andreasbm/web-skills" rel="noopener" aria-label="Open become stargazer on Github">stargazer on Github</a>, share Web Skills with your friends and followers or create blog articles linking to Web Skills. If you want to, it will absolutely make my day if you <a href="https://www.buymeacoffee.com/AndreasMehlsen" target="_blank" aria-label="Buy coffee">support me with a cup of coffee</a>!</p>

			<h3>How can I get involved?</h3>
			<p>You are welcome to get involved in any way you like. If you want to, you can go to <a target="_blank" href="https://github.com/andreasbm/web-skills/issues" rel="noopener" aria-label="Open get involved">Github</a> and help me fix the spelling, fix issues or suggest some new features. Any involvement is highly appreciated!</p>

			<h3>How can I keep track of what skills I know?</h3>
			<p>If you scroll to the bottom of the page, you will find a button that says "Sign in with Google". If you click this button and sign in, you will be able to mark skills as completed.</p>

			<h3>I am overwhelmed! Help me!</h3>
			<p>I totally understand if you are a bit overwhelmed by the amount of skills on the page – but I can assure you that this overview includes much, much more than most people will ever need to know. My main goal is to provide a visual overview of web development and make people hungry for learning more. One of the things I absolute love about being a developer is learning new skills. I think it is amazing to be in a field where you can do what you do for a lifetime and still learn something new! People cannot be an expert in every skill on this page so try to find what excites you the most and become really good at that.</p>

			<h3>Why haven't you included XYZ Technology?</h3>
			<p>The skills are based on what I personally find to be the most useful on a day-to-day basis. If you think something really important is missing, you can always suggest it on <a target="_blank" href="https://github.com/andreasbm/web-skills/issues" rel="noopener" aria-label="Open suggest feature">Github</a>.</p>

			<h3>How can I get rid of the horizontal scrolling?</h3>
			<p>Many people do not like horizontal scrolling; Personally I really like in this context and wanted to build something truly unique :-) If you want to get rid of the horizontal scrolling, you can toggle back and forth between the wide and compact layout by using the switch at the top of the page. The compact mode is default for mobile users. If you want to share a link for the compact mode you can add <code>?compact</code> to the end of the URL. If you like the wide layout the most you can use the mouse to drag yourself around on the page or press <code>Alt + /</code> to jump to other sections.</p>
			
			<h3>What does the "experimental" banner mean?</h3>
			<p>When a skill is described as experimental, it means that the technology is immature and currently in the process of being added to the Web platform (or considered for addition). Think carefully before you start using experimental technology in any kind of production project. The definition used in Web Skills is based on the excellent definition used on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental" rel="noopener">MDN</a>. You are very welcome to open an issue on <a target="_blank" href="https://github.com/andreasbm/web-skills/issues" rel="noopener" aria-label="Open get involved">Github</a> if you see a skill you believe should be marked as "experimental" or have the banner removed.</p>

			<h3>How can I get in contact with you?</h3>
			<p>Reach out to me on Twitter at <a target="_blank" href="https://twitter.com/AndreasMehlsen" rel="noopener" aria-label="Open Twitter">@AndreasMehlsen</a> or take a look at <a target="_blank" href="https://andreasbm.github.io" rel="noopener" aria-label="Open personal website">my website</a> if you want to learn more about what other projects I'm working on.</p>
			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}