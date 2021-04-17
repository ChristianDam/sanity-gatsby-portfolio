export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607aa61539599bd926421c67',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uri1b16f',
                  apiId: '1c63d365-3b99-4d89-89c9-efb7768795d1'
                },
                {
                  buildHookId: '607aa616c07786f1c7b59f3e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1czfxzen',
                  apiId: 'f12629c3-1e99-4ca2-98e6-9d3ed8c5f252'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianDam/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1czfxzen.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
