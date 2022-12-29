//cards scroll

const leftBtn = document.querySelector('.left_arrow')
const rightBtn = document.querySelector('.right_arrow')
const cards = document.querySelector('.cards')
const search = document.querySelector('.search')
const search_input = document.querySelector('#search_input')

leftBtn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})

rightBtn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})


// card data fetching

const json_url ='movie.json'

fetch(json_url).then(Response => Response.json()).then((data) => {

    //card 
    data.forEach((ele) => {
        const {name, imdb, date, sposter, bposter, genre, url} = ele;
        const card = document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML = `
        <img class="poster" src="${sposter}" alt="">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span>⭐ ${imdb}</h3>
                </div>
            </div>
        </div>`

        cards.appendChild(card);
    });


    //main content
    document.querySelector('#title').innerHTML = data[0].name;
    document.querySelector('#gen').innerHTML = data[5].genre;
    document.querySelector('#date').innerHTML = data[2].date;
    // document.querySelector('#rate').innerHTML =`<h3 id="rate"> <span>IMDB</span>⭐ ${data.[1].imdb}  </h3>`


    // seraching data
    data.forEach((e) => {

        const {name, imdb, date, sposter, bposter, genre, url} = e;
        const card = document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML = `
        <img src="${sposter}" alt="">
                        <div class="cont">
                            <h2>${name}</h2>
                            <p>${genre}, ${date}<span>IMDB</span>⭐ ${imdb}</p>
                        </div>`

        search.appendChild(card);
    });


    //serch data filter
    search_input.addEventListener('keyup', () => {
        const filter = search_input.value.toUpperCase();
        const a = search.getElementsByTagName('a')

        for (let index = 0; index < a.length; index++) {
            
            const b = a[index].getElementsByClassName('cont')[0];
            // console.log(b.textContent);
            const TextValue = b.textContent || b.innerText;
            if(TextValue.toUpperCase().indexOf(filter) > -1){
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            }else {
                a[index].style.display = "none";
            }
            if(search_input == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
            
        }
    })


    const video = document.querySelector('#video');
    const play = document.querySelector('#play');

    play.addEventListener('click', () => {
        if(video.paused){
            video.play();
            play.innerHTML = `Play <i class="fa fa-pause-circle" aria-hidden="true"></i>`
        }else {
            video.pause();
            play.innerHTML = `Watch <i class="fa fa-play-circle" aria-hidden="true"></i>`
        }

    })

    //series filter

    const series = document.querySelector('#series');

    series.addEventListener( 'click', () => {
        cards.innerHTML= '';

        const seriesFilter = data.filter(ele => {
            return ele.type === 'series';
        })

        seriesFilter.forEach((ele) => {
            const {name, imdb, date, sposter, bposter, genre, url} = ele;
            const card = document.createElement('a');
            card.classList.add('card');
            card.href=url;
            card.innerHTML = `
            <img class="poster" src="${sposter}" alt="">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span>⭐ ${imdb}</h3>
                    </div>
                </div>
            </div>`
    
            cards.appendChild(card);
        });
        
    })

    //movies filter
    const movies = document.querySelector('#movies');

    movies.addEventListener( 'click', () => {
        cards.innerHTML= '';

        const movieFilter = data.filter(ele => {
            return ele.type === 'movie';
        })

        movieFilter.forEach((ele) => {
            const {name, imdb, date, sposter, bposter, genre, url} = ele;
            const card = document.createElement('a');
            card.classList.add('card');
            card.href=url;
            card.innerHTML = `
            <img class="poster" src="${sposter}" alt="">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span>⭐ ${imdb}</h3>
                    </div>
                </div>
            </div>`
    
            cards.appendChild(card);
        });
        
    })
    
   



});





