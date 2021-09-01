export const algorithmCollection = {
	name: "알고리즘",
	areas: [
	    {
			name: "기초",
			skills: [
				{
					name: "정렬",
					description: {
						text: "'컴퓨터 과학'과 '수학'에서 정렬 알고리즘이란 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘이다.",
						links: [
							["정렬 알고리즘 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
							["정렬 예시(15개) - YouTube", "https://youtu.be/kPRA0W1kECg"],
							["정렬 추천문제 - 백준", "https://www.acmicpc.net/step/9"],
						]
					},
					skills: [
						{
							name: "버블 정렬",
							description: {
								text: "거품(버블) 정렬은 두 인접한 원소를 검사하여 정렬하는 방법이다. 시간 복잡도가 O(n²)으로 상당히 느리지만, 코드가 단순하기 때문에 자주 사용된다.",
								links: [
									["거품(버블) 정렬 - 위키백과", "https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC"],
									["버블 정렬이 수행되는 과정 - YouTube", "https://www.youtube.com/watch?v=lyZQPjUT5B4&ab_channel=AlgoRythmics"],
								]
							},
						},
						{
							name: "선택 정렬",
							description: {
								text: "선택 정렬은 알고리즘이 단순하며 사용할 수 있는 메모리가 제한적인 경우에 사용시 성능 상의 이점이 있다. 하지만 버블 정렬과 마찬가지로 시간복잡도가 O(n²)로 상당히 느리다.",
								links: [
									["선택 정렬 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC"],
									["선택 정렬이 수행되는 과정 - YouTube", "https://www.youtube.com/watch?v=Ns4TPTC8whw&ab_channel=AlgoRythmics"],
								]
							},
						},
						{
							name: "병합 정렬",
							description: {
								text: "병합 정렬은 시간복잡도가 O(n log n)인 비교 기반 정렬 알고리즘이다. 일반적인 방법으로 구현했을 때 이 정렬은 안정(stable) 정렬에 속하며, 분할 정복 알고리즘의 하나이다.",
								links: [
									["병합 정렬 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC"],
									["병합 정렬이 수행되는 과정 - YouTube", "https://www.youtube.com/watch?v=XaqR3G_NVoo&ab_channel=AlgoRythmics"],
								]
							},
						},
						{
							name: "퀵 정렬",
							description: {
								text: "퀵 정렬은 n개의 데이터를 정렬할 때, 최악의 경우에는 O(n²)번의 비교를 수행하고, 평균적으로 O(n log n)번의 비교를 수행한다.",
								links: [
									["퀵 정렬 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC"],
									["퀵 정렬이 수행되는 과정 - YouTube", "https://www.youtube.com/watch?v=ywWBy6J5gz8&ab_channel=AlgoRythmics"],
								]
							},
						},
					]
				},
				{
					name: "검색",
					description: {
						text: "검색 알고리즘은 이름 그대로 검색 문제를 해결하는 어떠한 알고리즘들을 일컬어 부르는 말이다.",
						links: [
							["검색 알고리즘 - 위키백과", "https://ko.wikipedia.org/wiki/%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
							["검색 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=no_asc&algo=12%2C80&algo_if=and"],
						]
					},
					skills: [
						{
							name: "선형 검색",
							description: {
								text: "선형 검색 알고리즘은 리스트에서 찾고자 하는 값을 맨 앞에서부터 끝까지 차례대로 찾아나가는 알고리즘이다.",
								links: [
									["선형 검색 알고리즘 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%88%9C%EC%B0%A8_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
								]
							},
						},
						{
							name: "이진 검색",
							description: {
								text: "이진 검색 알고리즘은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘이다.",
								links: [
									["이진 검색 알고리즘 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
									["이진 검색 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=no_asc&algo=12&algo_if=and"],
								]
							},
						},
						{
							name: "두 포인터",
							description: {
								text: "두 포인터 알고리즘은 정렬된 리스트에서 처음 값 그리고 끝 값을 활용하여 O(N) 만에 원하는 값을 찾아내는 알고리즘이다.",
								links: [
									["두 포인터 예제 - geeksforgeeks", "https://www.geeksforgeeks.org/two-pointers-technique/"],
									["두 포인터 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=no_asc&algo=80&algo_if=and"],
								]
							},
						},
						{
							name: "해싱",
							description: {
								text: "해싱은 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다. 이 해싱은 매우 빠른 데이터 검색을 위한 컴퓨터 소프트웨어에 널리 사용된다.",
								links: [
									["해싱(해쉬 함수) - 위키백과", "https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8B%9C_%ED%95%A8%EC%88%98"],
									["해싱 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=ranking_asc&algo=8&algo_if=and"],
								]
							},
						},
					]
				},
				{
					name: "DP",
					description: {
						text: "DP는 복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법을 말한다.",
						links: [
							["DP - 위키백과", "https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%EA%B3%84%ED%9A%8D%EB%B2%95"],
							["DP 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=ranking_asc&algo=25%2C92%2C108%2C87%2C107&algo_if=or"],
						]
					},
				},
			]
		},
		{
			name: "심화",
			skills: [

		    ]
		},
		{
            name: "이것만은 꼭!",
            skills: [
                {
                    name: "순회",
                    description: {
                        text: "트리 구조에서 각각의 노드를 정확히 한 번만, 체계적인 방법으로 방문하는 과정을 말한다.",
                        links: [
                            ["순회 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C"],
                            ["순회 - 추천문제", "https://www.acmicpc.net/problem/10971"],
                        ]
                    },
                    skills: [
                        {
                            name: "BFS",
                            description: {
                                text: "시작 정점을 방문한 후 시작 정점에 인접한 모든 정점들을 우선 방문하는 방법이다.",
                                links: [
                                    ["BFS - 위키백과", "https://ko.wikipedia.org/wiki/%EB%84%88%EB%B9%84_%EC%9A%B0%EC%84%A0_%ED%83%90%EC%83%89"],
                                    ["BFS - 추천문제", "https://www.acmicpc.net/problem/4963"],
                                ]
                            },
                        },
                        {
                            name: "DFS",
                            description: {
                                text: "시작점 부터 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하고 넘어가는 방법이다.",
                                links: [
                                    ["DFS - 위키백과", "https://ko.wikipedia.org/wiki/%EA%B9%8A%EC%9D%B4_%EC%9A%B0%EC%84%A0_%ED%83%90%EC%83%89"],
                                    ["DFS - 추천문제", "https://www.acmicpc.net/problem/2617"],
                                ]
                            },
                        }
                    ]
                },
                {
                    name: "그리디",
                    description: {
                        text: "\"매 선택에서 지금 이 순간 당장 최적인 답을 선택하여 적합한 결과를 도출하자\" 라는 모토를 가지는 알고리즘 설계 기법이다. 따라서 종합적으로 봤을 때 최적이라는 보장은 절대 없다는 것을 명심해야 한다.",
                        links: [
                            ["그리디 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%83%90%EC%9A%95_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
                            ["그리디 - 추천문제", "https://www.acmicpc.net/problem/2839"],
                        ]
                    },
                },
                {
                    name: "최단 경로",
                    description: {
                        text: "가장 짧은 경로에서 두 꼭짓점을 찾는 문제로서, 가중 그래프에서는 구성하는 변들의 가중치 합이 최소가 되도록 하는 경로를 찾는 문제이다. 예를 들면, 도로 지도 상의 한 지점에서 다른 지점으로 갈 때 가장 빠른 길을 찾는 것과 비슷한 문제이다. 이 때, 각 도로 구간에서 걸리는 시간을 변의 가중치라 할 수 있다.",
                        links: [
                            ["최단 경로 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%83%90%EC%9A%95_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
                            ["최단 경로 - 추천문제", "https://www.acmicpc.net/problem/18352"],
                        ]
                    },
                    skills: [
                        {
                            name: "BFS",
                            description: {
                                text: "가중치가 없는 그래프에서 최단경로를 찾는 경우에 사용하는 방법이다.",
                                links: [
                                    ["BFS - velog", "https://velog.io/@kasterra/%ED%95%B5%EC%8B%AC-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EA%B7%B8%EB%9E%98%ED%94%84-%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-%ED%83%90%EC%83%89"],
                                    ["BFS - 추천문제", "https://www.acmicpc.net/problem/2665"],
                                ]
                            },
                        }
                    ]
                }

            ]
        }
	]
}