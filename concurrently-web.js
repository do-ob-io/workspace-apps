import concurrently from 'concurrently';

const { result } = concurrently([
  { command: 'pnpm web:dev', name: 'Web' },
  { command: 'pnpm ui:watch', name: 'Package UI' }
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
