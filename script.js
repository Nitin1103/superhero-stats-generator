// my access token : 6601778893275317
// https://superheroapi.com/api.php/6601778893275317/search/name

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randBtn = document.getElementById('random');
const searchBtn = document.querySelector('#search-btn');
const textInput = document.querySelector('#search-input');

let initialId = 1;

// when page loads 
document.addEventListener("DOMContentLoaded", function () {
    getSuperHeroById(1);
});

/// getting superhero by id
const getSuperHeroById = (id) => {
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

// getting super hero by name
const getSuperHeroByName = (name) => {
    const superheroname = name;
    fetch(`https://superheroapi.com/api.php/6601778893275317/search/${superheroname}`)
        .then(response => response.json())
        .then(json => {
            if (json.results && json.results.length > 0) {
                const superhero = json.results[0]; // Assuming you want the first superhero found with the given name
                initialId = superhero.id; // Update initialId with the found superhero's ID
                document.querySelector('.picture').innerHTML = `<img src="${superhero.image.url}"/>`;
                document.getElementById('heroId').innerHTML = 'Hero ID: ' + superhero.id;
                document.getElementById('heroName').innerHTML = 'Name: ' + superhero.name;
                document.getElementById('heroGender').innerHTML = 'Gender: ' + superhero.appearance.gender;
                document.getElementById('heroHeight').innerHTML = 'Height: ' + superhero.appearance.height[0];
                document.getElementById('heroWeight').innerHTML = 'Weight: ' + superhero.appearance.weight[1];
            } else {
                // Handle case when no superhero with the given name is found
                alert('Superhero not found');
                getSuperHeroById(1);   //  show 1st superhero as default
            }
        })
        .catch(error => {
            console.error('Error fetching superhero by name:', error);
        });
}

// search functionality

searchBtn.addEventListener('click', searchHero = () => {
    const query = textInput.value;
    if (!isNaN(query)) {
        document.getElementById('heroId').innerHTML = 'Hero ID: ';
        document.getElementById('heroName').innerHTML = 'Name: ';
        document.getElementById('heroGender').innerHTML = 'Gender: ';
        document.getElementById('heroHeight').innerHTML = 'Height: ';
        document.getElementById('heroWeight').innerHTML = 'Weight: ';
        initialId = query;
        textInput.value = "";
        getSuperHeroById(query);
    } else {
        document.getElementById('heroId').innerHTML = 'Hero ID: ';
        document.getElementById('heroName').innerHTML = 'Name: ';
        document.getElementById('heroGender').innerHTML = 'Gender: ';
        document.getElementById('heroHeight').innerHTML = 'Height: ';
        document.getElementById('heroWeight').innerHTML = 'Weight: ';
        textInput.value = "";
        getSuperHeroByName(query);

    }
});

// next button
nextBtn.addEventListener('click', function () {
    initialId++;
    document.getElementById('heroId').innerHTML = 'Hero ID: ';
    document.getElementById('heroName').innerHTML = 'Name: ';
    document.getElementById('heroGender').innerHTML = 'Gender: ';
    document.getElementById('heroHeight').innerHTML = 'Height: ';
    document.getElementById('heroWeight').innerHTML = 'Weight: ';

    // console.log(initialId);
    getSuperHeroById(initialId);
    prevBtn.disabled = false;
});


// previous button 
prevBtn.addEventListener('click', function () {
    if (initialId > 1) {
        initialId--;
        // console.log(initialId);
        document.getElementById('heroId').innerHTML = 'Hero ID: ';
        document.getElementById('heroName').innerHTML = 'Name: ';
        document.getElementById('heroGender').innerHTML = 'Gender: ';
        document.getElementById('heroHeight').innerHTML = 'Height: ';
        document.getElementById('heroWeight').innerHTML = 'Weight: ';

        getSuperHeroById(initialId);
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
    document.getElementById('heroId').innerHTML = 'Hero ID: ';
    document.getElementById('heroName').innerHTML = 'Name: ';
    document.getElementById('heroGender').innerHTML = 'Gender: ';
    document.getElementById('heroHeight').innerHTML = 'Height: ';
    document.getElementById('heroWeight').innerHTML = 'Weight: ';

    getSuperHeroById(initialId);
});