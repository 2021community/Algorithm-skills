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


			<h3>알고리즘 학습을 위한 책 추천</h3>
			<p> &nbsp&nbspICPC 같은 대회를 생각하는 분에게는 '종만북'(알고리즘 문제 해결 전략) 을 보는 것이 좋지
			    &nbsp&nbsp만, 코딩 테스트를 통과하기 위한 학습책으로는 '종만북'보다는 다른 책들을 추천한다.</p>

			<h3>추천 책 목록 : </h3>
			<p>&nbsp&nbsp파이썬 알고리즘 인터뷰 - 박상길<br>
			&nbsp&nbsp이것이 코딩 테스트다 - 나동빈</p>

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

			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}