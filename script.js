const musicList = [
    "Queen - Bohemian Rhapsody",
    "Michael Jackson - Billie Jean",
    "The Beatles - Hey Jude",
    "Led Zeppelin - Stairway to Heaven",
    "Pink Floyd - Comfortably Numb",
    "Bob Marley - No Woman No Cry",
    "David Bowie - Space Oddity",
    "Elton John - Rocket Man",
    "Nirvana - Smells Like Teen Spirit",
    "Rolling Stones - Paint It Black",
    "Bruce Springsteen - Born to Run",
    "Prince - Purple Rain",
    "Madonna - Like a Prayer",
    "U2 - With or Without You",
    "Guns N' Roses - Sweet Child O' Mine",
    "Radiohead - Creep",
    "Metallica - Enter Sandman",
    "Oasis - Wonderwall",
    "Coldplay - Yellow",
    "Beyoncé - Single Ladies",
    "Eminem - Lose Yourself",
    "Coldplay - Viva La Vida",
    "lizzo - special",
    "new hope club - don’t go wasting time",
    "why don’t we -  what am I",
    "peder elias -  paper plane",
    "valley -  like 1999",
    "Andy grammer - fresh eyes",
    "christopher - leap of faith",
    "paige - too much to h8"
];

// 콘솔에 현재 musicList 출력
console.log(musicList);

// 함수: 랜덤 팝송 추천
function recommendRandomMusic() {
    let randomIndex = Math.floor(Math.random() * musicList.length);
    return musicList[randomIndex];
}

// 이벤트 리스너: 팝송 추천 버튼 클릭 시 실행될 함수
document.getElementById('recommend-btn').addEventListener('click', function() {
    let randomMusic = recommendRandomMusic();
    displayRecommendation(randomMusic);
});

// 함수: 추천된 팝송을 화면에 표시
function displayRecommendation(music) {
    let recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = ''; // 이전 추천 초기화

    let recommendationText = document.createElement('p');
    recommendationText.textContent = `추천 팝송: ${music}`;
    recommendationDiv.appendChild(recommendationText);
}
