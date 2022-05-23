const inquirer = require('inquirer');
const { exec } = require("child_process");
inquirer
  .prompt([
		{
			name: 'extend',
      message: 'How would you like to extend the starter?',
      type: 'list',
      choices: [{value: 'cms', name: 'Add CMS connection'}]
    },
    {
			name: 'cms',
			message: 'Choose desired CMS',
			type: 'list',
			choices: ['Prismic', 'Contentful'],
			when(answers) {
				return answers.extend === 'cms'
			}
		}
  ])
  .then((answers) => {
		if (answers.cms && answers.cms === 'Prismic') {
			exec("curl -s https://$GITHUB_TOKEN@raw.githubusercontent.com/KosmosOgKaos/starter-expansions/main/CMS/prismic/setup.sh | bash -s", (error, stdout, stderr) => {
    		if (error) {
        	console.log(`error: ${error.message}`);
        	return;
    		}
    		if (stderr) {
        	console.log(`stderr: ${stderr}`);
        	return;
    		}
    		console.log(`stdout: ${stdout}`);
			});
		}
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
