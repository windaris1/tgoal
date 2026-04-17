document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('stream');
  const params = new URLSearchParams(window.location.search);
  const scrParam = params.get('scr');
  
  if (scrParam) {
    iframe.src = decodeURIComponent(scrParam);
  } else {
    // Default kalo ?scr= kosong
    iframe.src = 'https://sibaltv.pages.dev/sibco.jpg';
  }
});

const fr = document.getElementById('stream');
const bt = document.getElementById('block-top');
const bb = document.getElementById('block-bottom');
const bl = document.getElementById('block-left');
const br = document.getElementById('block-right');

const v = id => parseInt(document.getElementById(id).value) || 0;

function go() {
  const top  = v('i-top');
  const left = v('i-left');

  fr.style.top    = top + 'px';
  fr.style.left   = left + 'px';
  fr.style.height = 'calc(100% + ' + (Math.abs(top) + 70) + 'px)';   // disesuaikan
  fr.style.width  = 'calc(100% + ' + Math.abs(left) + 'px)';

  bt.style.height = v('i-bt') + 'px';
  bb.style.height = v('i-bb') + 'px';
  bl.style.width  = v('i-bl') + 'px';
  br.style.width  = v('i-br') + 'px';
}

function copyIt() {
  const s = `top:${v('i-top')}px | left:${v('i-left')}px | blok: atas=${v('i-bt')} bawah=${v('i-bb')} kiri=${v('i-bl')} kanan=${v('i-br')}`;
  document.getElementById('copy-out').textContent = s;
  navigator.clipboard.writeText(s).catch(()=>{});
}

// Inisialisasi
go();