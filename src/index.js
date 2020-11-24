'use strict';
module.exports = function inlineText (call_site, ...placeholder_values) {

    if (!Array.isArray(call_site)) {
        throw new Error(
            'inline-text should be called via "inline`foo`;" and not as a function'
        );
    }

    return call_site.join('').replace(/\s*\n\s*/g, ' ').trim();
}
