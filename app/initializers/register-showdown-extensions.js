/* global showdown */
export function initialize(/* application */) {
  showdown.extension("typeit", function() {
    return [{
        type: 'output',
        regex: /\s\s+/g,
        replace: ''
      },
      {
      type: 'output',
      regex: />((.|\n)*?)</g,
      replace: function(all, firstGroup/*, secondGroup, offset, string*/) {
        if(firstGroup.trim() === '') {
          return all;
        }
        let openTag = '<span class="char">';
        let closeTag = '</span>';
        let temp = firstGroup.trim().concat(' ').split('').map(c => openTag + c + closeTag).join('');
        return `>${temp}<`;
      }
    },
    {
      type: 'lang',
      regex: /&&&((.|\n)*?)&&&/g,
      replace: function(all, firstGroup) {
        let openTag = '<span class="editable">';
        let closeTag = '</span>';
        return openTag + firstGroup + closeTag;
      },
    }];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize
};
