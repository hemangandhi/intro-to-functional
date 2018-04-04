window.addEventListener("load", function () {
    
    hljs.initHighlighting();

    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [["$", "$"]]
        },
        "HTML-CSS": {
            scale: 60
        }
    });

    Reveal.initialize({
        width: "100%",
        height: "100%",

        controls: false,
        progress: false,
        slideNumber: true,
        history: true,
        theme: "white"
    });

});
