let allGames = [];
let currentProvider = 'pp';
let currentIndex = 0;
const itemsPerPage = 20;
let isLoading = false;


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.container, .container-lg, .container-md, .container-sm, .container-xl').forEach(container => {
    container.style.maxWidth = contentWith;
  });
  
  document.documentElement.style.setProperty('--first-color', firstColor);
  document.documentElement.style.setProperty('--second-color', secondColor);
  document.documentElement.style.setProperty('--third-color', thirdColor);
  document.documentElement.style.setProperty('--fourth-color', fourthColor);
  document.documentElement.style.setProperty('--fifth-color', fifthColor);
  document.documentElement.style.setProperty('--g1', g1Color);
  document.documentElement.style.setProperty('--g2', g2Color);
  document.documentElement.style.setProperty('--slider-background', bannerBackground);
});

document.addEventListener("DOMContentLoaded", function () {
  // Use the logoData from data.js
  const logoDiv = document.querySelector('.logo');
  
  // Create an img element for the logo
  const logoImage = document.createElement('img');
  logoImage.src = websiteLogo;
  
  // Append the image to the logo container div
  logoDiv.appendChild(logoImage);
  
  const websiteDescElement = document.querySelector('.website-desc');
  websiteDescElement.innerHTML = websiteName + " - " + websiteDesc;
  
  // Contact
  document.querySelector('#contact .title').innerHTML = "🔥 KONTAK OFFICIAL " + websiteName + " 🔥"
  document.querySelector('#contact .whatsapp').innerHTML = "☎️ WHATSAPP : " + "<a href='https://wa.me/" + contactWhatsapp +  "'> " + contactWhatsapp + " </a>"
  document.querySelector('#contact .telegram').innerHTML = "📲 : " + "<a href='" + contactTelegramUrl +  "'> " + contactTelegramUrl + " </a>"
  
  document.querySelector('#home-nav').onclick = () => location.href = websiteURL;
  document.querySelector('#promo-nav').onclick = () => location.href = websiteURLPromo;
  document.querySelector('#register-nav').onclick = () => location.href = websiteURLRegister;
  
  document.body.style.backgroundImage = `url('${contentBackground}')`;
  document.body.style.backgroundSize = 'cover';  
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundAttachment = 'fixed';
});

document.addEventListener("DOMContentLoaded", function () {
  const runningTextDiv = document.querySelector('.running-text');
  
  // Create marquee element
  const marquee = document.createElement('marquee');
  marquee.scrollAmount = 3;  // control the speed
  marquee.direction = 'left';  // set the scrolling direction
  marquee.textContent = runningTextData.text;  // load the text from runningTextData
  
  // Apply dynamic styles from runningTextData
  runningTextDiv.style.background = runningTextData.background;
  runningTextDiv.style.fontWeight = runningTextData.fontWeight;
  runningTextDiv.style.textTransform = runningTextData.textTransform;
  runningTextDiv.style.fontSize = runningTextData.fontSize;
  runningTextDiv.style.color = runningTextData.color;
  runningTextDiv.style.padding = runningTextData.padding;
  
  // Append the marquee to the div
  runningTextDiv.appendChild(marquee);
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.floating-buttons');
  
  floatingButtons.forEach(btnData => {
    const btn = document.createElement('div');
    btn.className = 'btn rounded-circle shadow mb-2 p-0 overflow-hidden';
    btn.id = btnData.id;
    
    const img = document.createElement('img');
    img.src = btnData.image
    img.alt = btnData.alt;
    img.style = 'width: 100%;';
    btn.appendChild(img);
    
    if (btnData.type === 'link') {
      btn.onclick = () => location.href = btnData.url;
    } else if (btnData.type === 'modal') {
      btn.setAttribute('data-bs-toggle', 'modal');
      btn.setAttribute('data-bs-target', btnData.modalTarget);
    }
    
    container.appendChild(btn);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.getElementById('swiperWrapper');
  
  bannersSectionData.forEach(banner => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    
    const img = document.createElement('img');
    img.src = banner.image;
    img.loading = 'lazy';
    img.classList.add('slider-img', 'rounded');
    img.style.objectFit = 'contain';
    img.alt = banner.alt;
    
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  });
  
  // Initialize the Swiper after adding the slides
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const websiteButtonsRow = document.getElementById('websiteButtonsRow');
  
  websiteButtonSectionData.forEach(button => {
    const col = document.createElement('div');
    col.classList.add('col', 'd-grid');
    
    const btn = document.createElement('button');
    btn.textContent = button.text;
    btn.onclick = () => location.href = button.url;
    
    // Normal styles
    btn.style.background = button.background || '#ccc';
    btn.style.color = button.color || '#000';
    btn.style.border = button.border || 'none';
    btn.style.padding = '0.6rem';
    btn.style.fontWeight = 'bold';
    
    // Hover effects
    btn.addEventListener('mouseenter', () => {
      btn.style.background = button.hoverBackground || button.background;
      btn.style.color = button.hoverColor || button.color;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = button.background;
      btn.style.color = button.color;
    });
    
    col.appendChild(btn);
    websiteButtonsRow.appendChild(col);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const currentProv = urlParams.get('prov');  
  
  if (currentProv) {
    currentProvider = currentProv;
  }
  
  updateGameTopInfo(currentProvider); 
  loadGames(currentProvider); 
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById('provider-section');
  const container = document.getElementById('provider-items');
  
  // Set parent section background color
  section.style.backgroundColor = providersSectionData.bgColor || '#ffffff';
  
  // Loop through providers
  providersSectionData.providers.forEach(provider => {
    const item = document.createElement('div');
    item.className = 'text-center d-flex flex-column align-items-center justify-content-center';
    item.style.minWidth = '110px';
    
    if (currentProvider == provider.id) {
      item.classList.add('active');
    }
    
    const clickable = document.createElement('div');
    clickable.style.cursor = 'pointer';
    
    const img = document.createElement('img');
    img.src = provider.image;
    img.alt = provider.name;
    img.className = 'provider-img mb-2';
    
    const name = document.createElement('p');
    name.className = 'small mb-0';
    name.textContent = provider.name;
    
    clickable.addEventListener('click', () => {
      const allItems = container.querySelectorAll('.provider-item');
      allItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to the clicked item
      item.classList.add('active');
      
      // Set the provider id in the URL query string
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('prov', provider.id);
      window.history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
      
      updateGameTopInfo(provider.id);
      loadGames(provider.id);
      
      // Scroll to the provider section
      document.getElementById('provider-section').scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
      });
    });
    
    // Add a class for the provider item
    item.classList.add('provider-item');
    
    clickable.appendChild(img);
    clickable.appendChild(name);
    item.appendChild(clickable);
    container.appendChild(item);
  });
});

function updateGameTopInfo(providerId) {
  const providerData = gameSectionData[providerId];
  
  // Get the date today (you can adjust it as needed)
  const today = new Date();
  const updateDate = today.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  
  // Update the "Update RTP" section
  const updateDateElement = document.getElementById('update-rtp-date');
  updateDateElement.innerHTML = `<i class="lni text-warning lni-timer"></i> Update RTP: ${updateDate}`;
  
  // Get the game section where title and rating will be displayed
  const gameDescSection = document.getElementById('game-desc-section');
  
  // Clear the existing content before adding new elements
  gameDescSection.innerHTML = '';  // This clears the content
  
  // Create and set the game title dynamically
  const gameTitle = document.createElement('h4');
  gameTitle.className = 'title-game';
  gameTitle.textContent = providerData.description;
  
  // Create the rating section dynamically
  const gameRating = document.createElement('h6');
  gameRating.innerHTML = `<i class="lni lni-thumbs-up"></i> SUKA(${providerData.like}) :`;
  
  // Loop through the rating and create stars
  const starCount = Math.round(providerData.rating); // Round the rating to the nearest whole number
  for (let i = 0; i < 5; i++) { 
    const star = document.createElement('i');
    star.classList.add('lni', 'lni-star-fill');
    if (i < starCount) {
      star.classList.add('text-warning');  
    }
    gameRating.appendChild(star);
  }
  
  // Append the created elements to the game section
  gameDescSection.appendChild(gameTitle);
  gameDescSection.appendChild(gameRating);
}

function loadGames(providerId) {
  const gamesContainer = document.querySelector('#game-section');
  const data = gameSectionData[providerId].items;
  
  document.getElementById('loading').style.display = 'block';
  
  fetch(data)
  .then(response => response.json())
  .then(data => {
    allGames = data;
    currentIndex = 0;
    gamesContainer.innerHTML = '';
    loadMoreGames();
    
    document.getElementById('loading').style.display = 'none';
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
}

function loadMoreGames() {
  if (isLoading) return;
  isLoading = true;
  
  const gamesContainer = document.querySelector('#game-section');
  const nextItems = allGames.slice(currentIndex, currentIndex + itemsPerPage);
  
  nextItems.forEach((game, index) => {
    const col = document.createElement('div');
    console.log(gamesColumn)
    
    if (gamesColumn == 6) {
      col.className = 'col-lg-2 col-6 mx-0 px-1 py-1';
    } else if (gamesColumn == 4) {
      col.className = 'col-lg-3 col-6 mx-0 px-1 py-1';
    } else {
      col.className = 'col-lg-4 col-6 mx-0 px-1 py-1';
    }
    
    const card = document.createElement('div');
    if (currentIndex == 0) {
      card.className = 'rtp-card animate__animated animate__bounceIn';
    } else {
      card.className = 'rtp-card';
    }
    card.setAttribute('data-prov', currentProvider);
    
    card.style.background = 'linear-gradient(0deg, var(--first-color) 0%, var(--fifth-color) 100%)';
    
    const hotGame = document.createElement('div');
    hotGame.className = game.gameLevel;
    
    const row = document.createElement('div');
    row.className = 'row g-1';
    
    const colImg = document.createElement('div');
    colImg.className = 'col-lg-6 align-self-center';
    
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'place-img-rtp';
    imgWrapper.onmouseenter = () => {
      playButton.style.display = 'inline-block';
      img.style.filter = 'grayscale(100%)';
      img.style.opacity = '0.5';
      img.style.transform = 'scale(1.1)';
      img.style.transition = '0.3s';
      img.style.verticalAlign = 'middle';
    };
    imgWrapper.onmouseleave = () => {
      playButton.style.display = 'none'; 
      img.style.filter = 'grayscale(0%)';
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
      img.style.transition = '0.2s';
      img.style.verticalAlign = 'middle';
    };
    
    const playButton = document.createElement('button');
    playButton.className = 'btn-play shadow';
    playButton.innerHTML = '<i class="lni lni-heart-fill"></i> Mari Bermain';
    playButton.style.display = 'none';
    playButton.onclick = () => window.open(websiteURL, '_blank');
    
    
    const img = document.createElement('img');
    img.className = 'lazy shadow rtp-card-img';
    img.src = game.gameImage;
    img.alt = 'game image';
    
    img.style.filter = 'grayscale(0%)';
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
    img.style.transition = '0.2s';
    img.style.verticalAlign = 'middle';
    
    imgWrapper.appendChild(playButton);
    imgWrapper.appendChild(img);
    colImg.appendChild(imgWrapper);
    
    const colContent = document.createElement('div');
    colContent.className = 'col-lg-6';
    
    const polaWrapper = document.createElement('div');
    polaWrapper.className = 'pola-wrapper shadow text-center';
    
    const providerIcon = document.createElement('div');
    providerIcon.className = 'icon-providers';
    const iconImg = document.createElement('img');
    iconImg.src = game.providerIcon;
    iconImg.alt = 'icon provider';
    providerIcon.appendChild(iconImg);
    
    const polaTitle = document.createElement('h4');
    polaTitle.innerHTML = '<i class="lni lni-bar-chart"></i> Pola Slot:';
    
    const hr = document.createElement('hr');
    
    const table = document.createElement('table');
    table.className = 'table-pola text-center';
    const tbody = document.createElement('tbody');
    if (game.gameTable.length === 0) {
      // Render the fallback content
      const tr1 = document.createElement('tr');
      tr1.id = `pola-slot-1-${index}`;
      const td1 = document.createElement('td');
      td1.className = 'text-danger fw-bold';
      td1.textContent = 'Pola Tidak Tersedia!!';
      tr1.appendChild(td1);
      
      const tr2 = document.createElement('tr');
      tr2.id = `pola-slot-2-${index}`;
      const td2 = document.createElement('td');
      td2.textContent = 'Tidak Disarankan Bermain';
      tr2.appendChild(td2);
      
      const tr3 = document.createElement('tr');
      tr3.id = `pola-slot-3-${index}`;
      const td3 = document.createElement('td');
      td3.textContent = 'Game ini';
      tr3.appendChild(td3);
      
      tbody.appendChild(tr1);
      tbody.appendChild(tr2);
      tbody.appendChild(tr3);
    } else {
      // Render gameTable rows
      game.gameTable.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        tr.id = `pola-slot-${rowIndex + 1}-${index}`;
        
        const tdKey = document.createElement('td');
        tdKey.textContent = row.key;
        tr.appendChild(tdKey);
        
        // Check if the row has "values" array (new format)
        if (Array.isArray(row.values)) {
          row.values.forEach(val => {
            const td = document.createElement('td');
            const icon = document.createElement('i');
            icon.className = `mx-0 lni ${val.value === 'text-success' ? 'lni-checkmark-circle' : 'lni-cross-circle'} fw-bold ${val.value}`;
            td.appendChild(icon);
            tr.appendChild(td);
          });
        } 
        // Fallback to old format
        else if ('value' in row && 'name' in row) {
          const tdValue = document.createElement('td');
          const span = document.createElement('span');
          span.className = row.value;
          span.textContent = row.name;
          
          const icon = document.createElement('i');
          icon.className = `mx-1 lni ${row.value === 'text-success' ? 'lni-checkmark-circle' : 'lni-cross-circle'} fw-bold ${row.value}`;
          
          tdValue.appendChild(span);
          tdValue.appendChild(icon);
          tr.appendChild(tdValue);
        }
        
        tbody.appendChild(tr);
      });
      
    }
    table.appendChild(tbody);
    
    const jamGacor = document.createElement('h5');
    jamGacor.className = 'mt-3 fw-bold';
    jamGacor.id = `jam-gacor-${index}`;
    jamGacor.innerHTML = `<i class="lni lni-alarm-clock"></i> Jam: ${generateSeedRandomGameHour(game.gameImage)}`;
    
    const percentWrapper = document.createElement('div');
    percentWrapper.className = 'percent';
    
    const gamePercentInt = parseInt(generateSeedRandomPercent(game.gameImage));
    const percentText = document.createElement('p');
    percentText.id = `percent-txt-${index}`;
    percentText.style.zIndex = '15';
    percentText.textContent = `${gamePercentInt}%`;
    
    const percentBar = document.createElement('div');
    percentBar.id = `percent-bar-${index}`;
    percentBar.className = `percent-bar ${gamePercentInt >= 70 ? 'great' : gamePercentInt >= 30 ? 'good' : 'bad'}`;
    percentBar.setAttribute('role', 'progressbar');
    percentBar.setAttribute('aria-valuemin', '0');
    percentBar.setAttribute('aria-valuemax', '100');
    percentBar.setAttribute('aria-valuenow', gamePercentInt);
    percentBar.style.width = `${gamePercentInt}%`;
    
    percentWrapper.appendChild(percentText);
    percentWrapper.appendChild(percentBar);
    
    polaWrapper.appendChild(providerIcon);
    polaWrapper.appendChild(polaTitle);
    polaWrapper.appendChild(hr);
    polaWrapper.appendChild(table);
    polaWrapper.appendChild(jamGacor);
    polaWrapper.appendChild(percentWrapper);
    
    colContent.appendChild(polaWrapper);
    
    row.appendChild(colImg);
    row.appendChild(colContent);
    
    card.appendChild(hotGame);
    card.appendChild(row);
    
    col.appendChild(card);
    gamesContainer.appendChild(col);
  });
  
  currentIndex += itemsPerPage;
  isLoading = false;
}

function getHourlySeed() {
  const now = new Date();
  const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * CONSISTENCY_DURATION));
  return hoursSinceEpoch.toString(); 
}

function generateSeedRandomGameHour(gameImage) {
  const seed = gameImage + getHourlySeed();
  const rng = new Math.seedrandom(seed);
  const now = new Date();

  const offsetStartMinutes = Math.floor(rng() * (60 + 20)) - 20; // -20 to +60
  const startTime = new Date(now.getTime() + offsetStartMinutes * 60 * 1000);

  const offsetEndMinutes = Math.floor(rng() * (180 - 30 + 1)) + 30;
  const endTime = new Date(startTime.getTime() + offsetEndMinutes * 60 * 1000);

  const formatTime = (d) => d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');

  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

function generateSeedRandomPercent(gameImage) {
  const seed = gameImage + getHourlySeed();
  const rng = new Math.seedrandom(seed);

  const percent = Math.floor(rng() * (97 - 20 + 1)) + 20;

  return percent;
}

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
    // near the bottom
    if (currentIndex < allGames.length) {
      loadMoreGames();
    }
  }
});

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}