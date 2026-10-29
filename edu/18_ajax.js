// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100

const form = document.querySelector("form");

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 기존 이벤트 취소

  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    // 카드를 넣을 컨테이너 요소
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = '';

    response.data.forEach((item, idx) => {
      
      // 2. card-img 요소 생성
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${item.download_url}')`;
      
      // 3. card-text 요소 생성
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${item.id}: ${item.author}`;
      
      // 선생님은 부모(1)를 나중에 만드심 왜 ? 카드에 어펜드차일드로 자식을 추가할 수 있어서(먼저 넣는 애가 위에 있음 순서 대로 넣기 !!!!)
      // 1. card 요소 생성
      const card = document.createElement('div');
      // 재정의 되면 안 되기 때문에 const를 주로 씀
      // card.classList = 'card'; // 기존 클래스명을 덮어써버리기 때문에 기존 클래스명을 유지하고 싶으면 같이 적어줘야 함
      card.classList.add('card') // 그래서 이렇게 적어야 함
      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 4. card-container에 생성한 요소를 담는다
      cardContainer.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
});


// ajax는 기본적으로 비동기 처리임
// 동기형식으로 만들기 위해 프로미스 객체를 사용해야 함(에이싱크 어웨이트)
// 카멜기법..???파스칼기법 케밥..?
