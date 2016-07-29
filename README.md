Gitbook plugin: Transform annotated quotes to notes
==============

For gitbook 3.x

Emoji notes are an additional tag for Gitbook.

Supported emoji blocks:

- {% emojinote %}
- {% emojiwarning %}
- {% emojidanger %}
- {% emojisuccess %}

The example usage:

```
{% emojinote %}
Example text here.
{% endemojinote %}
```


You can install this plugin via NPM:

```bash
$ npm install gitbook-plugin-richquotes-emoji
```

Be sure to activate the option from the `book.json` file:

```json
{
    "plugins" : ["richquotes-emoji"]
}
```
