
const fs = require('fs');
const { parse } = require('csv-parse');

const filePath = process.argv.slice(2)?.[0];

if (!filePath) {
  console.error('Please provide the filepath as an argument')
}

const rs = fs.createReadStream(process.argv.slice(2)?.[0]);

const parser = parse({
  delimiter: "\t",
  columns: true,
}, (error, data) => {
  if (error) {
    console.log('error :>> ', error);
    
    return;
  }

  const writeStream = fs.createWriteStream('src/universities.ts');
  const pathName = writeStream.path;

  // write each value of the array on the file
  writeStream.write('// This is an auto-generated file, pleased don\'t update it manually\n');
  writeStream.write('export const universities = [\n');
  data.sort((a, b) => (a.Hochschulname > b.Hochschulname) ? 1 : -1).map(({ Hochschulname }) => writeStream.write(`  '${Hochschulname}',\n`));
  writeStream.write('];\n');

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on('finish', () => {
    console.log(`Successfully rewrote ${pathName} file with updated data`);
  });

  // handle the errors on the write process
  writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
  });

  // close the stream
  writeStream.end();
});

rs.pipe(parser);