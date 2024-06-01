import concurrently from 'concurrently';

const { result } = concurrently([
  { command: 'pnpm web', name: 'Web' },
  { command: 'pnpm api:watch:lib', name: 'API' },
  { command: 'pnpm api:watch:codegen', name: 'API Codegen' },
  { command: 'pnpm db:watch', name: 'DB' },
  { command: 'pnpm logic:watch', name: 'Logic' },
  { command: 'pnpm ui:watch', name: 'UI' }
], {
  killOthers: [ 'failure', 'success' ],
  prefix: 'name'
});

result.then(() => {
  console.log('All processes have completed successfully');
}).catch((commands) => {
  commands.forEach((command) => {
    console.log(`${command.name} has failed`);
    console.error(command.error);
  });
  console.error('Some processes have failed');
  process.exit(1);
});
