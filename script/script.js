const inputForm = document.querySelector('#inputForm');
const books = document.querySelectorAll('.oneBook');


/*функция, по сути, для мобильных устройств*/
/* задерживает открытие ссылки */
/* убирает черно-белый фильтр с книжной обложки */
/* переходит по ссылке, открывая ее в том же окне, возвращает фильтр на обложку */
books.forEach(book => {
        book.addEventListener('click', function(event) {
            /*предотвратили открытие ссылки по умолчанию*/
            const link = book.href;            
            book.classList.add('selected');
            //проверяем, находится ли книга под фильтром
            if (book.querySelector('.bookImage').classList.value.includes('grayscale')) {
                //отключаем автоматический переход по ссылке
                event.preventDefault();
                //включаем переход по ссылке с задержкой, снимаем фильтр и добавляем объема
                book.querySelector('.bookImage').classList.remove('grayscale');
                // book.classList.add('selected');
                setTimeout(function() {window.open(link, "_self")}, 700);
                //через 1.2 секунды возвращаем первоначальное состояние
                setTimeout(function() {book.querySelector('.bookImage').classList.add('grayscale')}, 1200);
            }
            setTimeout(function() {book.classList.remove('selected');}, 1200);
        })
})

inputForm.addEventListener('keyup', e => {
    const word = e.target.value.trim().toLowerCase();
    
    books.forEach(book => {
        book.querySelector('h3').innerText.toLowerCase().includes(word) || book.attributes['data-author'].nodeValue.toLowerCase().includes(word) ? book.style.display = 'block' : book.style.display = 'none';
    })
})