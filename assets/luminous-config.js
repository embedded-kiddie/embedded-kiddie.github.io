(function() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.4.0/luminous-basic.min.css');
  document.body.append(link);

  // caption のオプション（img 要素の alt 属性の値をキャプションに表示）
  window.onload = function() {
    const luminousOpts = {
      caption: (trigger) => {
        //img 要素に alt 属性が設定されていれば
        if (trigger.querySelector('img').hasAttribute('alt')) {
          //img 要素の alt 属性の値を取得して返す
          return trigger.querySelector('img').getAttribute('alt');
        } else {
          return '';
        }
      }
    }

    //ページに .luminous が複数ある場合は、ギャラリー表示、1つだけの場合は単体表示する場合の例
    const luminousElems = document.querySelectorAll('[data-lightbox]');
  
    if (luminousElems !== null) {
      if (luminousElems.length > 1) {
        //対象の要素が複数ある場合は LuminousGallery でギャラリー表示
        new LuminousGallery(luminousElems, {}, luminousOpts);
      } else if (luminousElems[0]) {
        //対象の要素が1つだけの場合 Luminous で単体表示
        new Luminous(luminousElems[0], {}, luminousOpts);
      }
    }
  }
})();