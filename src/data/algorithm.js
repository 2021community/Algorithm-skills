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
							name: "이진 검색",
							description: {
								text: "이진 검색 알고리즘은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘이다.",
								links: [
									["이진 검색 알고리즘 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"],
									["이진 검색 추천문제 - 백준", "https://www.acmicpc.net/problemset?sort=no_asc&algo=12&algo_if=and"],
								]
							},
						},
					]
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

            ]
        }
	]
}