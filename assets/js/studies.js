new Cuttr('.content', {
    //options here
    truncate: 'words',
    length: 30,
    readMore: true,
    readMoreText: 'weiterlesen.',
    readLessText: ' Text schließen.',
    readMoreBtnPosition: 'inside',
});

new Cuttr('.content_en', {
    //options here
    truncate: 'words',
    length: 30,
    readMore: true,
    // Achtung Test!
    readMoreText: '<div data-icon="ei-plus" data-size="s"></div>',
    readLessText: '<div data-icon="ei-minus" data-size="s"></div>',
    readMoreBtnPosition: 'inside',
    readMoreBtnTag: '',
    readMoreBtnSelectorClass: '',
    readMoreBtnAdditionalClasses: '',
    // Test Ende
});
