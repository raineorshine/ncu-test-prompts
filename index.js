const prompts = require('prompts');
const promptsNCU = require('prompts-ncu');

const fork = process.argv[2] === '--fork';

(async () => {
  const spec = [
    {
      type: 'multiselect',
      name: 'color',
      instructions: false,
      message: 'Pick colors',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Green', value: '#00ff00' },
        { title: 'Blue', value: '#0000ff' }
      ],
    }
  ]

  const url = fork 
    ? 'raineorshine/ncu-test-prompts' 
    : 'terkelg/prompts'

  console.info('Testing ' + url)

  const response = await (fork ? promptsNCU : prompts)(spec);

  console.info(response);
})();