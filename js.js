/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Runs into a bar. Crawls into a bar. Dances into a bar. Flies into a bar. Jumps into a bar. And orders: a beer; 2 beers; 0 beers; 99999999 beers; a lizard in a beer glass; -1 beer; "qwertyuiop" beers.')
})