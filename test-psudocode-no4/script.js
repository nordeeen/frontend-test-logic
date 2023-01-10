/* eslint-disable no-useless-concat */
const form = document.getElementById('form');
const num = document.getElementById('num');
const converted = document.getElementById('converted');

const satuan = {
  0: '',
  1: 'satu',
  2: 'dua',
  3: 'tiga',
  4: 'empat',
  5: 'lima',
  6: 'enam',
  7: 'tujuh',
  8: 'delapan',
  9: 'sembilan',
  10: 'sepuluh',
  11: 'sebelas',
  12: 'dua belas',
  13: 'tiga belas',
  14: 'empat belas',
  15: 'lima belas',
  16: 'enam belas',
  17: 'tujuh belas',
  18: 'delapan belas',
  19: 'sembilan belas',
};

const puluhan = {
  2: 'dua puluh',
  3: 'tiga puluh',
  4: 'empat puluh',
  5: 'lima puluh',
  6: 'enam puluh',
  7: 'tujuh puluh',
  8: 'delapan puluh',
  9: 'sembilan puluh',
};

form.onsubmit = (event) => {
  event.preventDefault();
  
  if (+num.value in satuan) {
    converted.innerHTML = satuan[+num.value];
  }
  const numArray = num.value.split('');
  if (numArray.length === 2 && +num.value > 19) {
    converted.innerHTML = puluhan[numArray[0]] + ' ' + satuan[numArray[1]];
  }

  if (numArray.length === 3) {
    if (+numArray[1] === 0) {
      converted.innerHTML =
        satuan[numArray[0]] + ' ratus ' + ' ' + satuan[numArray[2]];
    } else if (+numArray[1] < 2) {
      converted.innerHTML =
        satuan[numArray[0]] +
        ' ratus ' +
        ' ' +
        satuan[+[numArray[1], numArray[2]].join('')];
    } else {
      converted.innerHTML =
        satuan[numArray[0]] +
        ' ratus ' +
        puluhan[numArray[1]] +
        ' ' +
        satuan[numArray[2]];
    }
  }

  if (numArray.length === 4) {
    if (+numArray[1] === 0) {
      converted.innerHTML =
        satuan[numArray[0]] +
        ' ribu ' +
        ' ' +
        satuan[+[numArray[2], numArray[3]].join('')];
    } else if (+numArray[1] < 2) {
      converted.innerHTML =
        satuan[numArray[0]] +
        ' ribu ' +
        satuan[numArray[1]] +
        ' ratus ' +
        ' ' +
        satuan[+[numArray[2], numArray[3]].join('')];
    } else {
      converted.innerHTML =
        satuan[numArray[0]] +
        ' ribu ' +
        satuan[numArray[1]] +
        ' ratus ' +
        puluhan[numArray[2]] +
        ' ' +
        satuan[numArray[3]];
    }
  }
};
