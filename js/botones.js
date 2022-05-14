const BUTTON_POST = document.getElementById('showPost');
const BUTTON_HIDDENPOST = document.getElementById('hiddenPost');
const BUTTON_PUT = document.getElementById('showPut');
const BUTTON_HIDDENPUT = document.getElementById('hiddenPut');
const BUTTON_SEARCH = document.getElementById('searchButton');
const BUTTON_HIDESEARCH = document.getElementById('hiddensearchButton');

/*  AQUI EMPIEZA EL POST  */

BUTTON_POST.addEventListener('click', (e) => {
   e.preventDefault();
   showPost();
});
BUTTON_HIDDENPOST.addEventListener('click', (e) => {
   e.preventDefault();
   hiddenPost();
});

function showPost() {
   document.getElementById('post').style.display = 'block';
   BUTTON_POST.style.display = 'none';
   BUTTON_HIDDENPOST.style.display = 'block';
}

function hiddenPost() {
   document.getElementById('post').style.display = 'none';
   BUTTON_POST.style.display = 'block';
   BUTTON_HIDDENPOST.style.display = 'none';
}
/* AQUI EMPIEZA EL PUT*/

BUTTON_PUT.addEventListener('click', (e) => {
   e.preventDefault();
   showPut();
});
BUTTON_HIDDENPUT.addEventListener('click', (e) => {
   e.preventDefault();
   hiddenPut();
});
BUTTON_SEARCH.addEventListener('click', (e) => {
   e.preventDefault();
   showSearch();
});
function showPut() {
   document.getElementById('put').style.display = 'block';
   BUTTON_PUT.style.display = 'none';
   BUTTON_HIDDENPUT.style.display = 'block';
}

function hiddenPut() {
   document.getElementById('put').style.display = 'none';
   BUTTON_PUT.style.display = 'block';
   BUTTON_HIDDENPUT.style.display = 'none';
}
/* BOTONES SEARCH */
BUTTON_SEARCH.addEventListener('click', (e) => {
   e.preventDefault();
   showSearch();
});
function showSearch() {
   document.getElementById('searchBar').style.display = 'block';
   BUTTON_SEARCH.style.display = 'none';
   BUTTON_HIDESEARCH.style.display = 'block';
}
BUTTON_HIDESEARCH.addEventListener('click', (e) => {
   e.preventDefault();
   hideSearch();
});

function hideSearch() {
   document.getElementById('searchBar').style.display = 'none';
   BUTTON_SEARCH.style.display = 'block';
   BUTTON_HIDESEARCH.style.display = 'none';
}
