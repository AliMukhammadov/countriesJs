const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('name');
const api = `https://restcountries.com/v3.1/name/${country}`
const darkModeBtn = document.getElementById('darkmode-button')
const contryDetImg = document.querySelector('.country-img')
const countryPrimTitle = document.querySelector('.primary-title')

darkModeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})

async function sendReq(url) {
    const req = await fetch(url)
    const data = await req.json()
    showContent(data)
} 

sendReq(api)

const showContent = (country) => {
    contryDetImg.src = `${country[0].flags.svg}`
    countryPrimTitle.textContent = `${country[0].name.common}`
    console.log(country);
    infoDetails.classList.add('country-info-container')
    infoDetails.innerHTML = `
    <div class="country-info-details">
    <img class="country-img" src="" alt="" width="560" height="485">
    <div class="primary-info">
        <h1 class="primary-title"></h1>
        <div class="primary-divider">
            <p class="primary-message">
                <span class="highlight">Official name:</span>
            </p>
            <p class="primary-message">
                <span class="highlight">Population:</span>
            </p>
            <p class="primary-message">
                <span class="highlight">Region:</span>
            </p>
            <p class="primary-message">
                <span class="highlight">Subregion:</span>
            </p>
            <p class="primary-message">
                <span class="highlight">Capital:</span>
            </p>
        </div>
    </div>
    <div class="secondary-info">
        <p class="secondary-message">
            <span class="highlight">Start of week:</span>
        </p>
        <p class="secondary-message">
            <span class="highlight">Currencies:</span>
        </p>
        <p class="secondary-message">
            <span class="highlight">Languages:</span>
        </p>
        
        <div class="bordering-countries">
            <p class="bordering-content">
                <span class="highlight">Border countries:</span>
            </p>
            <ul class="bordering"></ul>
      </div>
    </div>
</div>
    `
}