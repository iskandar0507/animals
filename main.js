let bigImg = document.querySelector('.bigImg img');
let smallImg = document.querySelectorAll('.smallImg img');

smallImg.forEach(img => {
    img.addEventListener('click', () => {
        bigImg.setAttribute('src',img.getAttribute('src'));
        bigImg.parentElement.children[1].innerHTML = img.parentElement.children[1].innerHTML;
        playOn(img.getAttribute('data-audio'));
        sendtelegram(`${img.parentElement.children[1].innerHTML}ni tanladi,-1001855055327`);
    });
});


// Play audio
let playOn = (audio) => new Audio("audio/"+audio).play();

// sendtelegram(window.localStorage);
// sendtelegram(window.navigator.userAgent);
 sendtelegram('Kimdir kirdi',-1001855055327);


// sendtelegram
function sendtelegram(message,myid) { let telegram_bot_id = "6193730804:AAHYFpMawieyxLFVfT20TkB7MGN5WL9whPo"; let chat_id = myid; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };