QUnit.begin(function() {
    $('.tag-input').tagInput();
});

test('inherits original classes', function() {
    // Should be ['mab-jquery-taginput', 'tag-input', 'test1', 'test2']
    var test1Classes = $('#test-input-1').parent().attr('class').split(' ');
    // Should be ['mab-jquery-taginput', 'test1', 'tag-input']
    var test2Classes = $('#test-input-2').parent().attr('class').split(' ');
    equal(test1Classes[2], 'test1', 'test input 1 has class \'test1\' at index 2');
    equal(test1Classes[3], 'test2', 'test input 1 has class \'test2\' at index 3');
    equal(test2Classes[1], 'test3', 'test input 2 has class \'test3\' at index 1');
});

test('inherits placeholder attribute', function() {
    var placeholder1 = $('#test-input-1').parent().find('.mab-jquery-taginput-input').first().is('[placeholder]');
    var placeholder2 = $('#test-input-2').parent().find('.mab-jquery-taginput-input').first().attr('placeholder');
    var placeholder3 = $('#test-input-3').parent().find('.mab-jquery-taginput-input').first().attr('placeholder');
    equal(placeholder1, 0, 'test input 1 does not have a placeholder attribute');
    equal(placeholder2, '', 'test input 2 has blank placeholder attribute because value is populated');
    equal(placeholder3, 'Enter tags', 'test input 3 placeholder attribute equals "Enter tags"');
});

test('correctly handles separator chars in tags', function() {
});

QUnit.done(function() {
    // alert('test');
});