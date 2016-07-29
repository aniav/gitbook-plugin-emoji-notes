var typeMapping = {
    "danger": "‼️",
    "note": "ℹ️",
    "success": "✅",
    "warning": "⚠️"
};


function emojinote(block, type) {
    emoji = typeMapping[type];
    return (
        '<div class="emoji-block emoji-' + type + '">' +
            '<div class="emoji">' + emoji + '</div>' +
            '<div class="content">' +
                block.body +
            '</div>' +
        '</div>'
    )
}

module.exports = {
    website: {
        assets: "./book",
        css: [
            "book.css"
        ]
    },
    blocks: {
        emojinote: {
            process: function(block) {
                return emojinote(block, 'note');
            }
        },
        emojindanger: {
            process: function(block) {
                return emojinote(block, 'danger');
            }
        },
        emojinsuccess: {
            process: function(block) {
                return emojinote(block, 'success');
            }
        },
        emojiwarning: {
            process: function(block) {
                return emojinote(block, 'warning');
            }
        },
    }
};
