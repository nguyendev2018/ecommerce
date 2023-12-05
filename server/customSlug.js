const { default: slugify } = require("slugify");
 function customSlugify(input) {
    const options = {
        replacement: '-',  
        remove: /[^\w\s-]/g,  
        lower: true  
    };
    return slugify(input,options)
}
module.exports = customSlugify