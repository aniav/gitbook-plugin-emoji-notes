module.exports = {
    // Extend website resources and html
    website: {
        assets: "./book",
        js: [
            "book.js"
        ],
        css: [
            "book.css"
        ]
    },

    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% richquote type='type' %}World{% endMyTag %}"
        richquotes: {
            process: function(type='info', block) {
                types = {
                    "info": {alert: "info", picto: "fa-info"},
                    "note": {alert: "info", picto: "fa-info"},
                    "tag": {alert: "info", picto: "fa-tag"},
                    "comment": {alert: "info", picto: "fa-comment-o"},
                    "hint": {alert: "success", picto: "fa-lightbulb-o"},
                    "success": {alert: "success", picto: "fa-lightbulb-o"},
                    "warning": {alert: "warning", picto: "fa-fire"},
                    "caution": {alert: "warning", picto: "fa-fire"},
                    "danger": {alert: "danger", picto: "fa-times-circle"},
                    "quote": {alert: "quote", picto: "fa-fire"},
                    "todo": {alert: "info", picto: "fa-quote-left"},
                };
                return '<div class="clearfix alert alert-'+ types.type.alert +'">' + block.body + '</div>';
            }
        }
    },

    // Hook process during build
    hooks: {
        // For all the hooks, this represent the current generator

        // This is called before the book is generated
        "init": function() {
            console.log( "init!" );
            options = {todos: false};
            if (this.options.pluginsConfig && this.options.pluginsConfig.richquotes) {
                options = this.options.pluginsConfig.richquotes;
            }
        },

        // This is called after the book generation
        "finish": function() {
            console.log("finish!");
        }
    }
};
