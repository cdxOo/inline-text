'use strict';
module.exports = function inlineText (call_site, ...placeholder_values) {

    if (!Array.isArray(call_site)) {
        throw new Error(
            'inline-text should be called via "inline`foo`;" and not as a function'
        );
    }

    var newlines = /\s*\n\s*/g;

    return (
        call_site
        .map((str, i) => {
            var arg = placeholder_values[i];
            return (
                arg 
                ? str + arg.replace(newlines, ' ').trim()
                : str
            );
        })
        .join('').replace(newlines, ' ')
        .trim()
    );
}
