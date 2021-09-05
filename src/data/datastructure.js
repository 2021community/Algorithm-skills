export const datastructureCollection = {
	name: "자료구조",
	areas: [
	    {
			name: "기초",
			skills: [
				{
					name: "배열",
					description: {
						text: "번호(인덱스)와 번호에 대응하는 데이터들로 이루어진 자료 구조를 나타낸다.",
						links: [
							["배열 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%97%B4"],
							["배열 기초 - YouTube", "https://youtu.be/NFETSCJON2M"],
						]
					}
				},
				{
					name: "연결 리스트",
					description: {
						text: "각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조이다.",
						links: [
							["연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
						]
					},
					skills: [
						{
						   name: "단일 연결 리스트",
						   description: {
							  text: "각 노드에 자료 공간과 한 개의 포인터 공간이 있고, 각 노드의 포인터는 다음 노드를 가리킨다.",
							  links: [
								 ["단일 연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
								]
						   },
						},
						{
						   name: "이중 연결 리스트",
						   description: {
							  text: "구조는 단일 연결 리스트와 비슷하지만, 포인터 공간이 두 개가 있고 각각의 포인터는 앞의 노드와 뒤의 노드를 가리킨다.",
							  links: [
								["이중 연결 리스트 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"],
							   ]
						   },
						},
						{
							name: "원형 연결 리스트",
							description: {
							  text: "일반적인 연결 리스트에 마지막 노드와 처음 노드를 연결시켜 원형으로 만든 구조이다.",
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
						text: "한쪽 끝에서만 삽입과 삭제가 가능한 자료구조의 한 형태이다.",
						links: [
							["스택 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D"],
							["스택 기초 - YouTube", "https://youtu.be/DsZHDmth6Pc"],
						]
					}
				},

				{
					name: "큐",
					description: {
						text: "한쪽에선 삽입만 가능하고, 다른 한쪽에서는 삭제만 가능한 자료구조의 한 형태이다.",
						links: [
							["큐 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
						]
					}
				},

				{
					name: "덱",
					description: {
						text: "양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조의 한 형태이다.",
						links: [
							["덱 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%8D%B1_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
						]
					}
				},

				{
					name: "시간 복잡도",
					description: {
						text: "알고리즘이 어떤 문제를 해결하는 데 걸리는 시간을 의미하며, 알고리즘의 효율성을 평가하는데 사용된다.",
						links: [
							["시간 복잡도 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%8B%9C%EA%B0%84_%EB%B3%B5%EC%9E%A1%EB%8F%84"],
						]
					},
					skills: [
						{
						   name: "빅오 표기법",
						   description: {
							  text: "알고리즘 실행 시, 가장 최악의 경우를 가정하여 시간복잡도를 표기하는 기법이다. 시간 복잡도의 표기법 중에 가장 보편적으로 사용된다.",
							  links: [
								 ["빅오 표기법 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%A0%90%EA%B7%BC_%ED%91%9C%EA%B8%B0%EB%B2%95#%EB%8C%80%EB%AC%B8%EC%9E%90_O_%ED%91%9C%EA%B8%B0%EB%B2%95_(Big-O_notation)"],
								]
						   },
						},

						{
							name: "빅세타 표기법",
							description: {
							   text: "알고리즘 실행 시, 평균적인 경우를 가정하여 시간복잡도를 표기하는 기법이다.",
							   links: [
								  ["빅세타 표기법 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%A0%90%EA%B7%BC_%ED%91%9C%EA%B8%B0%EB%B2%95#%EB%8C%80%EB%AC%B8%EC%9E%90_O_%ED%91%9C%EA%B8%B0%EB%B2%95_(Big-O_notation)"],
								 ]
							},
						 },

						 {
							name: "빅오메가 표기법",
							description: {
							   text: "알고리즘 실행 시, 가장 최선의 경우를 가정하여 시간복잡도를 표기하는 기법이다.",
							   links: [
								 ["빅오메가 표기법 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%A0%90%EA%B7%BC_%ED%91%9C%EA%B8%B0%EB%B2%95#%EB%8C%80%EB%AC%B8%EC%9E%90_O_%ED%91%9C%EA%B8%B0%EB%B2%95_(Big-O_notation)"],
								]
							},
						  }
					]
				},
				
			]

			
		},


		{
			name: "심화",
			skills:[
				{
					name: "트리",
					description: {
						text: "그래프의 일종으로, 여러 노드가 한 노드를 가리킬 수 없는 구조이다. 간단하게는 회로가 없고, 서로 다른 두 노드를 잇는 길이 하나뿐인 그래프를 트리라고 부른다.",
						links: [
							["트리 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EA%B5%AC%EC%A1%B0"],
							["트리 핵심 요약 - YouTube", "https://youtu.be/i5yHkP1jQmo"],
						]
					},
					skills: [

						{
							name: "트라이",
							description: {
								text: "탐색 트리의 일종이며, 동적 집합이나 연관 배열을 저장하는 데 사용되는 트리 자료 구조이다.",
								links: [
									["트라이 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%9D%BC%EC%9D%B4_(%EC%BB%B4%ED%93%A8%ED%8C%85)"],
								]
							}
						},

						{
						   name: "이진 트리",
						   description: {
							  text: "각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조이다.",
							  links: [
								 ["이진 트리 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%ED%8A%B8%EB%A6%AC"],
								 ["이진 트리 개념 - YouTube", "https://youtu.be/P8gbyzHZgfY"]
								]
						   },
						   skills: [
							{
							   name: "AVL 트리",
							   description: {
								  text: "각각의 노드가 최대 두 개의 자식 노드를 가지며, 스스로 균형을 잡는 이진 탐색 트리이다.",
								  links: [
									 ["AVL 트리 - 위키백과", "https://ko.wikipedia.org/wiki/AVL_%ED%8A%B8%EB%A6%AC"],
									]
							   },
							},
							{
								name: "Red-Black 트리",
								description: {
								   text: "자가 균형 이진 탐색 트리로서, 대표적으로는 연관 배열 등을 구현하는 데 쓰이는 자료구조이다.",
								   links: [
									  ["Red-Black 트리 - 위키백과", "https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C-%EB%B8%94%EB%9E%99_%ED%8A%B8%EB%A6%AC"],
									  ["Red-Black 트리 개념 - YouTube" , "https://youtu.be/SHdYv41iCmE"]
									 ]
								},
							 },
							 {
								name: "힙",
								description: {
								   text: "최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전 이진 트리를 기본으로 한 자료구조이다.",
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
								text: "데이터베이스와 파일 시스템에서 널리 사용되는 트리 자료구조의 일종으로, 이진 트리를 확장해 하나의 노드가 가질 수 있는 자식 노드의 최대 숫자가 2보다 큰 트리 구조이다.",
								links: [
									["B 트리 - 위키백과", "https://ko.wikipedia.org/wiki/B_%ED%8A%B8%EB%A6%AC"],
								]
							}
						},
					]
				},

				{
					name: "그래프",
					description: {
						text: "vertex와 edge로 구성된 한정된 자료구조를 의미한다. vertex는 정점, edge는 정점과 정점을 연결하는 간선이다.",
						links: [
							["그래프 - 위키백과", "https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%84_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)"],
						]
					},
					skills: [
						{
							name: "방향 비순환 그래프(DAG)",
							description: {
								text: "수학, 컴퓨터 과학 분야의 용어의 하나로서 방향 순환이 없는 무한 유향 그래프이다.",
								links: [
									["방향 비순환 그래프 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%96%A5_%EB%B9%84%EC%88%9C%ED%99%98_%EA%B7%B8%EB%9E%98%ED%94%84"]
								]
							}
						},

						{
							name: "방향 그래프",
							description: {
								text: "방향을 가진 그래프이다.",
								links: [
									["방향 그래프 - 위키백과", "https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%96%A5_%EA%B7%B8%EB%9E%98%ED%94%84"]
								]
							}
						},

						{
							name: "스패닝 트리",
							description: {
								text: "스패닝 트리는 그래프G 안에 있는 모든 정점을 다 포함하면서 트리가 되는 연결된 부분 그래프이다.",
								links: [
									["스패닝 트리 - 네이버", "https://terms.naver.com/entry.naver?docId=853021&cid=50373&categoryId=50373"]
								]
							}
						},
					]
				},

				{
					name: "해시",
					description: {
						text: "하나의 문자열을 상징하는 더 짧은 길이의 값이나 키로 변환하는 것이다.",
						links: [
							["해시 - 네이버", "https://terms.naver.com/entry.naver?docId=3432002&cid=58437&categoryId=58437"]
						]
					},
					skills: [
						{
							name: "맵",
							description: {
								text: "컴퓨팅에서 키를 값에 매핑할 수 있는 구조인, 연관 배열 추가에 사용되는 자료 구조이다.",
								links: [
									["맵 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8B%9C_%ED%85%8C%EC%9D%B4%EB%B8%94"]
								]
							}
						},	
					]
				},

				{
					name: "트리 순회",
					description: {
						text: "트리 구조에서 각각의 노드를 정확히 한 번만, 체계적인 방법으로 방문하는 과정을 말한다. 이는 노드를 방문하는 순서에 따라 분류된다. ",
						links: [
							["트리 순회 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C"]
						]
					},
					skills: [
						{
							name: "전위 순회",
							description: {
								text: "노드, 왼쪽 서브 트리, 오른쪽 서브 트리 순으로 순회하는 방식이다.",
								links: [
									["전위 순회 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C"]
								]
							}
						},

						{
							name: "중위 순회",
							description: {
								text: "왼쪽 서브 트리, 노드, 오른쪽 서브 트리 순으로 순회하는 방식이다.",
								links: [
									["중위 순회 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C"]
								]
							}
						},

						{
							name: "후위 순회",
							description: {
								text: "왼쪽 서브 트리, 오른쪽 서브 트리, 노드 순으로 순회하는 방식이다.",
								links: [
									["후위 순회 - 위키백과", "https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C"]
								]
							}
						},
					]
				},	
		    ]
		}
	]
} 