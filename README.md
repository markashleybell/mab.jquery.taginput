# mab.jquery.taginput

Turns a text input into a tag input. [Click here to see a live demo](https://markashleybell.github.io/mab.jquery.taginput/).

## Basic Example

### HTML

```html
<form action="" method="post">
    <div class="form-group">
        <label for="tags1">Tags</label>
        <input type="text" class="form-control tag-input" name="tags" id="tags" placeholder="Enter tags" value="">
    </div>
</form>
```

### Script

```javascript
// Instantiate the Bloodhound suggestion engine
var tags = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.tag); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
        { tag: 'dog' },
        { tag: 'cat' },
        { tag: 'fish' },
        { tag: 'catfish' },
        { tag: 'dogfish' }
    ]
});

tags.initialize();

// Create typeahead-enabled tag inputs
$('.tag-input').tagInput({
    allowDuplicates: false,
    typeahead: true,
    typeaheadOptions: {
        highlight: true
    },
    typeaheadDatasetOptions: {
        // Display function determines which data is displayed as the tag text
        display: function(d) { return d.tag; },
        source: tags.ttAdapter()
    },
    onTagDataChanged: function(added, removed) {
        // Added/removed tags are passed in as callback parameters
        console.log('Tag Data: ' + (this.val() || null) + ', Added: ' + added + ', Removed: ' + removed + '\n');
    }
});
```