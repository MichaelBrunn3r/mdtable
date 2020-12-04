const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'main',
        repo: 'https://github.com/MichaelBrunn3r/MichaelBrunn3r.github.io.git',
        user: {
            name: 'MichaelBrunn3r',
            email: 'MichaelBrunn3r@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)