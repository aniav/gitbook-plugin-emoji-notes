Gitbook plugin: Transform annotated quotes to notes
==============

For gitbook 2.x

Annotated notes are an extension of markdown blockquotes.
Supported annotations:

- `> **Info** Info`
- `> **Note** Note`
- `> **Tag** Tag`
- `> **Comment** Comment`
- `> **Hint** Hint`
- `> **Success** Success`
- `> **Warning** Warning`
- `> **Caution** Caution`
- `> **Danger** Danger`
- `> **Quote** Quote`

Lowercase are allowed for annotations too.


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
