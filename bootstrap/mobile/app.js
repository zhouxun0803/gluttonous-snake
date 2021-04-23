(function(win) {
        var docEl = win.document.documentElement;
        var time;

        function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                if (width > 768) { // 最大宽度
                        width = 768;
                }
                var rem = width / 375*100;
                docEl.style.fontSize = rem + 'px';
                ///rem用font-size:50px来进行换算

        }

        win.addEventListener('resize', function() {
                clearTimeout(time);
                time = setTimeout(refreshRem, 1);
        }, false);
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        clearTimeout(time);
                        time = setTimeout(refreshRem, 1);
                }
        }, false);

        refreshRem();

})(window);
//getBoundingClientRect()；该方法获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置，他返回的是一个对象，即Object,有6个属性 top 、bottom、right、left、width和height
//以前getBoundingClientRect()是IE特有的，目前FF3+，opera9.5+，safari 4，都已经支持这个方法。
//onpageshow 事件类似于 onload 事件，onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。
