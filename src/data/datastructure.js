export const datastructureCollection = {
	name: "자료구조",
	areas: [
	    {
			name: "기초",
			skills: [
				{
					name: "배열",
					description: {
						text: "배열은 번호(인덱스)와 번호에 대응하는 데이터들로 이루어진 자료 구조를 나타낸다.",
						links: [
							["배열 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%97%B4"],
							["배열 기초 YOUTUBE", "https://youtu.be/NFETSCJON2M"],
						]
					}
				},
				{
					name: "연결 리스트",
					description: {
						text: "연결 리스트(linked list)는 각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조이다.",
						links: [
							["연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
						]
					},
					skills: [
						{
						   name: "단일 연결 리스트",
						   description: {
							  text: "단일 연결 리스트는 각 노드에 자료 공간과 한 개의 포인터 공간이 있고, 각 노드의 포인터는 다음 노드를 가리킨다.",
							  links: [
								 ["단일 연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
								]
						   },
						},
						{
						   name: "이중 연결 리스트",
						   description: {
							  text: "이중 연결 리스트의 구조는 단일 연결 리스트와 비슷하지만, 포인터 공간이 두 개가 있고 각각의 포인터는 앞의 노드와 뒤의 노드를 가리킨다.",
							  links: [
								["이중 연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
							   ]
						   },
						},
						{
							name: "원형 연결 리스트",
							description: {
							  text: "원형 연결 리스트는 일반적인 연결 리스트에 마지막 노드와 처음 노드를 연결시켜 원형으로 만든 구조이다.",
							  links: [
							   ["원형 연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
							   ]
							}
						 }

					 ]
				},
				{
					name: "스택",
					description: {
						text: "스택(stack)은 제한적으로 접근할 수 있는 나열 구조이다. 그 접근 방법은 언제나 목록의 끝에서만 일어난다. 끝먼저내기 목록(Pushdown list)이라고도 한다.",
						links: [
							["스택 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D"],
							["스택 기초 YOUTUBE", "https://youtu.be/DsZHDmth6Pc"],
						]
					}
				},

				{
					name: "큐",
					description: {
						text: "큐(queue)는 컴퓨터의 기본적인 자료 구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 형식을 말한다.",
						links: [
							["큐 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
						]
					}
				},

				{
					name: "데크",
					description: {
						text: "데크(deque)는 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조의 한 형태이다.",
						links: [
							["데크 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%8D%B1_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
						]
					}
				},
				
			]

			
		},


		{
			name: "심화",
			skills:[
				{
					name: "트리",
					description: {
						text: "트리 구조(tree)란 그래프의 일종으로, 여러 노드가 한 노드를 가리킬 수 없는 구조이다. 간단하게는 회로가 없고, 서로 다른 두 노드를 잇는 길이 하나뿐인 그래프를 트리라고 부른다.",
						links: [
							["트리 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EA%B5%AC%EC%A1%B0"],
							["트리 핵심 요약 YOUTUBE", "https://youtu.be/i5yHkP1jQmo"],
						]
					},
					skills: [
						{
						   name: "이진 트리",
						   description: {
							  text: "이진 트리(binary tree)는 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조로, 자식 노드를 각각 왼쪽 자식 노드와 오른쪽 자식 노드라고 한다. ",
							  links: [
								 ["이진 트리 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%ED%8A%B8%EB%A6%AC"],
								 ["이진 트리 개념 YOUTUBE", "https://youtu.be/P8gbyzHZgfY"]
								]
						   },
						   skills: [
							{
							   name: "AVL 트리",
							   description: {
								  text: "AVL 트리(Adelson-Velsky and Landis에서 따온 이름)는 스스로 균형을 잡는 이진 탐색 트리이다. ",
								  links: [
									 ["AVL 트리 - 위키백과", "https://ko.wikipedia.org/wiki/AVL_%ED%8A%B8%EB%A6%AC"],
									]
							   },
							},
							{
								name: "Red-Black 트리",
								description: {
								   text: "레드-블랙 트리(Red-black tree)는 자가 균형 이진 탐색 트리(self-balancing binary search tree)로서, 대표적으로는 연관 배열 등을 구현하는 데 쓰이는 자료구조다. ",
								   links: [
									  ["Red-Black 트리 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C-%EB%B8%94%EB%9E%99_%ED%8A%B8%EB%A6%AC"],
									  ["Red-Black 트리 개념 YOUTUBE" , "https://youtu.be/SHdYv41iCmE"]
									 ]
								},
							 },
							 {
								name: "힙",
								description: {
								   text: "힙(heap)은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리(complete binary tree)를 기본으로 한 자료구조다. ",
								   links: [
									  ["힙 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%9E%99_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
									 ]
								},
							 },
						]
						},
						{
							name: "B 트리",
							description: {
								text: "B 트리(B tree)는 데이터베이스와 파일 시스템에서 널리 사용되는 트리 자료구조의 일종으로, 이진 트리를 확장해 하나의 노드가 가질 수 있는 자식 노드의 최대 숫자가 2보다 큰 트리 구조이다.",
								links: [
									["B 트리 - 위키백과", "https://ko.wikipedia.org/wiki/B_%ED%8A%B8%EB%A6%AC"],
								]
							}
						},
					]
				},
		    ]
		},
		{
            name: "이것만은 꼭!",
            skills: [

            ]
        }
	]
} 