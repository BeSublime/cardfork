# Card Fork
A storytelling and/or conversation-starting card deck inspired by the Hard Fork podcast. Very much a work in progress!

## To-do
- [ ] Add contributing instructions & guidelines

## Development
From the terminal, run `npm run dev` to start up a simple server (using Parcel) which will monitor index.html (and any JS/CSS contained within it) and reload automatically when changes are made.

## Contributing
TBD

## Deployment
To deploy to GitHub pages, [enable github pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) in your repository's settings, and select the `/docs` directory as the source.

To update the published GitHub pages site,  run `npm run build`, then commit and push the changes to the remote repository. (This command uses parcel to compile the css, bundle any scripts, and output everything to the `/docs` directory.)

To deploy to other static site platforms, follow the instructions provided by the host. The build command in `package.json` can be updated to output to any directory by changing the `--dist-dir` parameter.

# Disclaimer
Card Fork is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Hard Fork podcast or the New York Times, or any of its subsidiaries or affiliates. The official Hard Fork website can be found at [https://www.nytimes.com/column/hard-fork](https://www.nytimes.com/column/hard-fork).
