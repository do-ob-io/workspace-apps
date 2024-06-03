import * as tjsg from 'ts-json-schema-generator';
import fs from 'fs';

/** @type {tjsg.Config} */
const config = {
  schemaId: 'action',
  path: './src/action/*.ts',
  tsconfig: './tsconfig.json',
  type: '*', // Or <type-name> if you want to generate schema for that one type only
  markdownDescription: true,
};

const outputPath = './src/_generated/schema.json';

const schema = tjsg.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);

// Write the file to the output path and create direcotries if they don't exist
fs.mkdirSync(outputPath.substring(0, outputPath.lastIndexOf('/')), { recursive: true });
fs.writeFile(outputPath, schemaString, (err) => {
  if (err) throw err;
});
