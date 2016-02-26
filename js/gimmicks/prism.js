(function($) {
    var prismGimmick = {
        name: 'prism',
        load: function() {
            $.md.stage('gimmick').subscribe(function(done) {
                prism_highlight();
                done();
            });
        }
    };
    var supportedLangs = [
                          "html",
                          "xml",
                          "css",
                          "clike",
                          "javascript",
                          "aspnet",
                          "bash",
                          "basic",
                          "batch",
                          "c",
                          "csharp",
                          "cpp",
                          "coffeescript",
                          "diff",
                          "docker",
                          "git",
                          "go",
                          "http",
                          "ini",
                          "java",
                          "json",
                          "makefile",
                          "markdown",
                          "python",
                          "rust",
                          "sql",
                          "yaml"
                          ];
    $.md.registerGimmick(prismGimmick);

    function prism_highlight () {
        // marked adds lang-ruby, lang-csharp etc to the <code> block like in GFM
        var $codeblocks = $('pre code[class^=lang-]');
        $codeblocks.each(function() {
                var $this = $(this);
                var classes = $this.attr('class');
                var lang = classes.substring(5);
                if (supportedLangs.indexOf(lang) < 0) {
                    return;
                }
                $this.removeClass(classes);
                $this.addClass('language-' + lang);
                $this.addClass('line-numbers');
            });
        Prism.highlightAll();
    }
}(jQuery));
