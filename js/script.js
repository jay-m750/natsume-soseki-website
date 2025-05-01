// 新增按鈕互動功能
$(document).ready(function() {
    $('#biography-more').click(function() {
        $('#biography-extra').toggle();
    });
});

// 顯示文化遺產更多細節
$(document).ready(function() {
    $('#legacy-more').click(function() {
        $('#legacy-extra').toggle();
    });
});

// 顯示後世評價更多評論
$(document).ready(function() {
    $('#legacy-more').click(function() {
        $('#legacy-extra').toggle();
    });
});

// 名言列表
const quotes = [
    "吾輩は猫である。名前はまだ無い。",
    "人間は弱い。だからこそ、強くなれる。",
    "幸福とは、自己の満足である。",
    "心の中にあるものを、言葉にするのは難しい。"
];

// 隨機顯示名言
$(document).ready(function() {
    $('#quote-button').click(function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $('#random-quote').text(quotes[randomIndex]);
    });
});