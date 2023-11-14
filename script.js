// my access token : 6601778893275317

const getSuperHeroImg = (id) => {
    const superheroid = id;
    fetch(`https://superheroapi.com/api.php/6601778893275317/${superheroid}`)
        .then(response => response.json())
        .then(json => {
            document.querySelector('.picture').innerHTML = `<img src="${json.image.url}"/>`;
            document.getElementById('heroId').innerHTML += json.id;
            document.getElementById('heroName').innerHTML += json.name;
            document.getElementById('heroGender').innerHTML += json.appearance.gender;
            document.getElementById('heroHeight').innerHTML += json.appearance.height[0];
            document.getElementById('heroWeight').innerHTML += json.appearance.weight[1];
        });
}


document.addEventListener("DOMContentLoaded", function () {
    getSuperHeroImg(1);
});

// adding next and previous functionality
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randBtn = document.getElementById('random');

let initialId = 1;


// next button
nextBtn.addEventListener('click', function () {
    initialId++;
    document.querySelector('.picture').innerHTML = '';
    document.getElementById('heroId').innerHTML = 'ID: ';
    document.getElementById('heroName').innerHTML = 'Name: ';
    document.getElementById('heroGender').innerHTML = 'Gender: ';
    document.getElementById('heroHeight').innerHTML = 'Height: ';
    document.getElementById('heroWeight').innerHTML = 'Weight: ';

    // console.log(initialId);
    getSuperHeroImg(initialId);
    prevBtn.disabled = false;
});


// previous button 
prevBtn.addEventListener('click', function () {
    if (initialId > 1) {
        initialId--;
        // console.log(initialId);
        document.querySelector('.picture').innerHTML = '';
        document.getElementById('heroId').innerHTML = 'ID: ';
        document.getElementById('heroName').innerHTML = 'Name: ';
        document.getElementById('heroGender').innerHTML = 'Gender: ';
        document.getElementById('heroHeight').innerHTML = 'Height: ';
        document.getElementById('heroWeight').innerHTML = 'Weight: ';

        getSuperHeroImg(initialId);
    }
    if (initialId <= 1) {
        prevBtn.disabled = true;
    }
});


// to generate random super hero

randBtn.addEventListener('click', function () {
    const rand = Math.floor(Math.random() * 732);
    initialId = rand;
    // console.log(initialId);
    document.querySelector('.picture').innerHTML = '';
    document.getElementById('heroId').innerHTML = 'ID: ';
    document.getElementById('heroName').innerHTML = 'Name: ';
    document.getElementById('heroGender').innerHTML = 'Gender: ';
    document.getElementById('heroHeight').innerHTML = 'Height: ';
    document.getElementById('heroWeight').innerHTML = 'Weight: ';

    getSuperHeroImg(initialId);
});
