export const algorithmCollection = {
	name: "알고리즘",
	areas: [
	    {
			name: "기초",
			skills: [

			]
		},
		{
			name: "심화",
			skills: [
			    {
                    name: "문자열",
                    description: {
                        text: "문자열 처리와 관련된 알고리즘이다.",
                        links: [
                            ["문자열 - 나무위키", "https://namu.wiki/w/%EB%AC%B8%EC%9E%90%EC%97%B4%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
                            ["문자열 - 추천문제", "https://www.acmicpc.net/problem/1152"],
                        ]
                    },
                    skills: [
                        {
                            name: "KMP",
                            description: {
                                text: "특정 문자열에서 부분 문자열을 찾을 때 쓰는 알고리즘이다.",
                                links: [
                                    ["KMP - velog", "https://velog.io/@junhok82/KMP"],
                                    ["KMP - 추천문제", "https://www.acmicpc.net/problem/1786"],
                                ]
                            }
                        },
                        {
                            name: "아호 코라식",
                            description: {
                              text: "하나의 문자열 안에서 여러 개의 부분 문자열이 존재하는지 찾아낼 때 사용하는 알고리즘이다. 즉, 일대다 문자열 패턴 매칭에 사용된다.",
                              links: [
                                  ["아호 코라식 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%95%84%ED%98%B8_%EC%BD%94%EB%9D%BC%EC%8B%9D_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
                                  ["아호 코라식 - 추천문제", "https://www.acmicpc.net/problem/10256"],
                              ]
                            }
                        },
                        {
                            name: "트라이",
                            description: {
                                text: "문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조를 문자열 탐색을 nlog(n)에 가능하게 하는 알고리즘이다.",
                                links: [
                                    ["트라이 - 블로그", "https://twpower.github.io/187-trie-concept-and-basic-problem"],
                                    ["트라이 - 추천문제", "https://www.acmicpc.net/problem/14725"],
                                ]
                            }
                        },
                        {
                            name: "매니커",
                            description: {
                                text: "문자열에 존재하는 팰린드롬 부분 문자열을 빠르게 찾을 수 있는 알고리즘이다.",
                                links: [
                                    ["매니커 - 블로그", "https://00ad-8e71-00ff-055d.tistory.com/91"],
                                    ["매니커 - 추천문제", "https://www.acmicpc.net/problem/13275"],
                                ]
                            }
                        }
                    ]
			    },
			    {
                    name: "백트래킹",
                    description: {
                        text: "해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법이다. 일종의 가지치기 기법이라고 할 수 있다.",
                        links: [
                            ["백트래킹 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%87%B4%EA%B0%81%EA%B2%80%EC%83%89"],
                            ["백트래킹 - 추천문제", "https://www.acmicpc.net/problem/9663"],
                        ]
                    }
                },
                {
                    name: "정수론",
                    description: {
                        text: "정수의 성질을 이용해 문제를 푸는 기법이다. 최대공약수/최소공배수, 에라토스테네스의 체 등이 있다.",
                        links: [
                            ["정수론 - 블로그(코팅테스트에 나오는 수학 정리)", "https://data-make.tistory.com/408"],
                            ["정수론 - 추천문제", "https://www.acmicpc.net/problem/2960"],
                        ]
                    }
                },
                {
                    name: "조합론",
                    description: {
                        text: "경우의 수를 따져 문제를 푸는 기법이다. 순열, 조합 등이 있다.",
                        links: [
                            ["조합론 - 블로그(순열, 조합, 부분집합 비교)", "https://data-make.tistory.com/493?category=347122"],
                            ["조합론 - 추천문제", "https://www.acmicpc.net/problem/1670"],
                        ]
                    }
                },
                {
                    name: "기하",
                    description: {
                        text: "각종 기하학적 도형을 다루는 알고리즘이다.",
                        links: [
                            ["기하 - 블로그(기하 알고리즘)", "https://allinfom.tistory.com/53"],
                            ["기하 - 추천문제", "https://www.acmicpc.net/problem/17386"],
                        ]
                    }
                },
                {
                    name: "최단 경로",
                    description: {
                        text: "가장 짧은 경로에서 두 꼭짓점을 찾는 문제로서, 가중 그래프에서는 구성하는 변들의 가중치 합이 최소가 되도록 하는 경로를 찾는 문제이다. 예를 들면, 도로 지도 상의 한 지점에서 다른 지점으로 갈 때 가장 빠른 길을 찾는 것과 비슷한 문제이다. 이 때, 각 도로 구간에서 걸리는 시간을 변의 가중치라 할 수 있다.",
                        links: [
                            ["최단 경로 문제 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%B5%9C%EB%8B%A8_%EA%B2%BD%EB%A1%9C_%EB%AC%B8%EC%A0%9C3"],
                            ["최단 경로 - 추천문제", "https://www.acmicpc.net/problem/1753"],
                        ]
                        skills: [
                            {
                                name: "벨만 포드",
                                description: {
                                    text: "다익스트라 알고리즘과 달리 음의 가중치를 가진 경로에서도 최단 경로를 구할 수 있다. ",
                                    links: [
                                        ["밸만 포드 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%B2%A8%EB%A8%BC-%ED%8F%AC%EB%93%9C_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
                                        ["밸만 포드 - 추천문제", "https://www.acmicpc.net/problem/11657"],
                                    ]
                                }
                            },
                        ]
                    }
                }
		    ]
		},
		{
            name: "이것만은 꼭!",
            skills: [

            ]
        }
	]
}