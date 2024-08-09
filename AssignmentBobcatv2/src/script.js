$(document).ready(function() {
    const images = $('.images img');
    const totalImages = images.length;
    let currentIndex = Math.floor(Math.random() * totalImages);
  
    function showImage(index) {
      images.removeClass('active');
      $(images[index]).addClass('active');
      images.css('transform', `translateX(${index * 100}%)`);
    }
  
    $('.pagination').html([...Array(totalImages).keys()].map(index => `<span data-index="${index}"></span>`).join(''));
  
    $('.pagination span').click(function() {
      currentIndex = $(this).data('index');
      showImage(currentIndex);
    });
  
    $('.close-btn').click(function() {
      $('.carousel').hide();
      $('.open-btn').show();
    });
  
    $('.open-btn').click(function() {
      $('.carousel').show();
      $('.open-btn').hide();
    });
  
    $('.arrow.left').click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    $('.arrow.right').click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  
    showImage(currentIndex);
  });