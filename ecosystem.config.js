module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'run start:custom',
        watch: ['src'],
        ignore_watch: ['node_modules'],
        watch_delay: 1000,
      },
    ],
  };
  