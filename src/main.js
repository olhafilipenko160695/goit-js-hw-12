// Описаний у документації
import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// https://pixabay.com/api/docs/
// my API KEY: 41990967-a01a4811db23696ec0b17c82e
const searchForm = document.querySelector('#searchForm');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.loadbutton');
loadButton.addEventListener('click', onLoadButton);

searchForm.addEventListener('submit', handleSearch);
const searchInput = document.getElementById('searchInput');
const mainGallery = new SimpleLightbox('.gallery a');
let page = 1;
let searchTerm = '';
loadButton.style.display = 'none';

async function performSearch(searchTerm) {
  const API_KEY = '41990967-a01a4811db23696ec0b17c82e';
  const BASE_URL = 'https://pixabay.com/api/';
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFE_SEARCH = true;
  const PER_PAGE = 40;

  const url = `${BASE_URL}?key=${API_KEY}&q=${searchTerm}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}&page=${page}&per_page=${PER_PAGE}`;
  try {
    const { data } = await axios(url);

    if (data.hits.length === 0) {
      loadButton.style.display = 'none';
      iziToast.warning({
        title: 'Caution',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      handleSearchResults(data.hits);
    }
    if (data.totalHits / PER_PAGE >= page) {
      loadButton.style.display = 'block';
    } else {
      loadButton.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    handleError(error);
  } finally {
    loader.style.display = 'none';
  }
}

function handleSearch(event) {
  event.preventDefault();
  loadButton.style.display = 'none';
  searchTerm = searchInput.value.trim();
  page = 1;
  gallery.innerHTML = '';
  if (searchTerm === '') {
    return;
  }
  loader.style.display = 'block';
  performSearch(searchTerm);
  searchForm.reset();
}

function onLoadButton() {
  page += 1;
  performSearch(searchTerm);
  const card = document.querySelector('.carditem');
  const cardHeight = card.getBoundingClientRect().height;
  console.log(cardHeight);
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}

function handleSearchResults(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="carditem">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/>
        <ul>
          <li>
            <p><b>Likes</b> ${likes}</p>
          </li>
          <li>
           <p><b>Views</b> ${views}</p>
          </li>
          <li>
            <p><b>Comments</b> ${comments}</p>
          </li>
          <li>
            <p><b>Downloads</b>${downloads}</p>
          </li>
        </ul>
    </a>
        
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  mainGallery.refresh();
}

function handleError(error) {
  iziToast.error({
    title: 'Error',
    message: 'An error occurred. Please try again later.',
  });
}
