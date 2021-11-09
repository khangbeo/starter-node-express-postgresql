const lodash = require("lodash");
// accepts a configuration parameter which is an object where the key specifies
// the original property name and the value specifies the new property name
// the function returns a new function that can be used over and over to modify multiple data objects
function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

module.exports = mapProperties;

/*
* configuration to convert the category properties to a nested category object
* the values specify the path of the property
* . is the delimiter, used like / or \ for a path folder
* if a portion of the path doesn't exist, it's created
* Arrays are created for missing index properties
* Objects are created for all other missing properties
* Any properties not in the config is left unchanged
{
  category_id: "category.category_id",
  category_name: "category.category_name",
  category_description: "category.category_description",
}
*/