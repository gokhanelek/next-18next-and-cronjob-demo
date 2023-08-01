## Running the project

- There is a json-server where we pull the languages. You can run it with the command json-server --watch db.json --port 3001.
- After running the json-server AP, you can use the project with standard nextjs commands.

## Libraries used in the project and their purposes

- Providing multi-language support over SSR using the Next-18next library.
- Using the -Node-cron job library, json-server API translation files were taken every 2 minutes and json files were created under the public/locales folder according to language and namespace information.
- Using the Ts-node library to compile a file with a .ts extension into a file with a .js extension
- Cronjob duration, default language and locations are defined in the .env file
