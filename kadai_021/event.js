const btn = document.getElementById ('btn');

addEventListener('click', () => {
  setTimeout(() => {
    const outPut = document.getElementById('text');
    outPut.textContent= 'ボタンをクリックしました'
  }, 2000); 
});
