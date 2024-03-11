import movies from './db.js'
const ul = document.querySelector('.promo__interactive-list')
const ul_genres = document.querySelector('.promo__menu-list ul')

class GenreBlock {
    constructor(container , genre) {
        this.li = document.createElement('li')
        this.a = document.createElement('a')


        this.a.classList.add('promo__menu-item')
        this.a.href = "#"
        this.a.innerHTML = genre

        this.li.append(this.a)
        container.append(this.li)

    }
}


for (let i = 0; i < movies.length; i++) {
    let item = movies[i];
    let li = document.createElement('li');
    let del = document.createElement('div');

    li.innerHTML = `${i + 1}. ${item.Title}`;
    li.classList.add('promo__interactive-item');
    del.classList.add('delete');

    li.append(del);
    ul.append(li);

    new GenreBlock(ul_genres, item.Genre);
}