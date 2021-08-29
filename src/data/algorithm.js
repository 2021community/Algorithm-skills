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