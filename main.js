document.getElementById('sunny').onclick = sunnyDay
document.getElementById('rain').onclick = rainyDay
document.getElementById('cloudy').onclick = cloudyDay
document.getElementById('thunderstorm').onclick = stormyDay
document.getElementById('snow').onclick = snowyDay
document.getElementById('fog').onclick = foggyDay
document.querySelector('span').onclick = refreshPage

function sunnyDay() {
    var video = document.createElement('video');
    video.src = 'production_id_4237998 (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);
    
    document.querySelector('body').style.backgroundImage = 'url("css/ivana-cajina-dQejX2ucPBs-unsplash.jpg")';
    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.color = '#37302a';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function rainyDay() {
    var video = document.createElement('video');
    video.src = 'production_id_3813820 (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);

    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.color = '#37302a';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function cloudyDay() {
    var video = document.createElement('video');
    video.src = 'pexels-tybo-ambientsky-5262509 (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);

    document.querySelector('body').style.backgroundImage = 'url("css/florian-zeh-eLWPw5aXXn8-unsplash.jpg")';
    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.color = '#37302a';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function stormyDay() {
    var video = document.createElement('video');
    video.src = 'pexels_videos_2657691 (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);
    
    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.color = '#37302a';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function snowyDay() {
    var video = document.createElement('video');
    video.src = 'video_of_snowfall (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);

    document.querySelector('body').style.backgroundImage = 'url("css/brian-jones-s8QSJTJI6qg-unsplash.jpg")';
    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function foggyDay() {
    var video = document.createElement('video');
    video.src = 'video (1080p).mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);

    document.querySelector('body').style.backgroundImage = 'url("css/samuel-ferrara-TXtQe_b5_Xw-unsplash.jpg")';
    document.querySelector('ul').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';
    document.querySelector('span').style.color = '#37302a';
    document.querySelector('span').style.visibility = 'visible';
    document.querySelector('h1').style.visibility = 'hidden'
}

function refreshPage() {
    location.reload();
}