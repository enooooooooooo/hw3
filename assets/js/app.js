const form = document.querySelector('.search-box');
const input = form.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Search term:', input.value);
  // TODO: Perform search
});
