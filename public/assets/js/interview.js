// Load YouTube only after the visitor chooses to play the interview.
const player = document.querySelector('#interview-player');
const playButton = player?.querySelector('.interview-play');

if (playButton) {
  playButton.hidden = false;
  playButton.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/ZiwZrhhmW-Q?autoplay=1';
    iframe.title = 'Entrevista de Lechonería El Paisa';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(iframe);
    iframe.focus();
  }, { once: true });
}
