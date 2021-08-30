if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById('Iframe').src = "360Test_mobi/index.htm";
  }else{
    document.getElementById('Iframe').src = "360TourTest/index.htm";
  }