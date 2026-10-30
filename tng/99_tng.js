// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number

const next = document.querySelector(".next");

let page = 1;
const limit = 3;

next.addEventListener('click', async (e)=>{
  e.preventDefault()
  
  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`

  try {
    const response = await axios.get(url);

    const cardContainer = document.querySelector('.card-container')

    response.data.forEach((item,idx) => {
      const cardImg = document.createElement('div')
      cardImg.classList.add('card-img')
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      const cardText = document.createElement('p')
      cardText.classList.add('card-text')
      cardText.textContent = `${item.id}: ${item.author}`

      const card = document.createElement('div');
      card.classList.add('card');
      card.appendChild(cardImg);
      card.appendChild(cardText);

      cardContainer.appendChild(card);
    });
    page++
  } catch(error) {
    console.log(error);
    
  }
})

const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
  const cardContainer = document.querySelector('.card-container')
  cardContainer.textContent = '';
  page = 1;
})
