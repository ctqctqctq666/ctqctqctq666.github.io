// 等待整个页面的HTML内容都加载完毕后，再执行我们的代码
document.addEventListener('DOMContentLoaded', (event) => {

    // 获取页面上需要的元素
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    // 定义一个全局函数 openLightbox，这样HTML里的onclick就可以调用它
    window.openLightbox = function(imageElement) {
        // 让放大层显示出来
        lightbox.style.display = 'flex';
        // 将被点击的图片的地址(src)赋值给放大层的图片
        lightboxImage.src = imageElement.src;
    }

    // 定义一个全局函数 closeLightbox
    window.closeLightbox = function() {
        // 让放大层隐藏起来
        lightbox.style.display = 'none';
        // 清空图片地址，节省内存
        lightboxImage.src = '';
    }
});
