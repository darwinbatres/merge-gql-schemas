const path = require("path");
const fs = require("fs");
const { makeExecutableSchema, mergeSchemas } = require("graphql-tools");

/**
 * @param {String} pathToSchemas path to where you have all your schemas, i.e "../graphql/schemas".
 * @returns {schema} schema, actual schema with all values merged.
 */
const mergeAllSchemas = pathToSchemas => {
  if (pathToSchemas === "") {
    throw new Error(
      "Please provide a valid path where you have all your schemas defined.",
    );
  }

  const schemas = [];

  try {
    // joining path of directory, going up one level to exit node_modules and take the actua path being passed as parameter
    const directoryPath = path.join(__dirname, `../${pathToSchemas}`);

    // get list of all files
    const files = fs.readdirSync(directoryPath);

    // dynamically import all schema files
    const filesContent = files.map(currentFile =>
      require(`${directoryPath}/${currentFile}`),
    );

    // make all dynamic files executable
    filesContent.forEach(currentObj => {
      const currentSchema = makeExecutableSchema({
        ...currentObj,
      });

      schemas.push(currentSchema);
    });

    // merge all converted schemas
    const schema = mergeSchemas({
      schemas,
    });

    return schema;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mergeAllSchemas;
