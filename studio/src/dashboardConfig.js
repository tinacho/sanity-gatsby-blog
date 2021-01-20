export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6008525edcb7bc3e3ea4e673',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mygj4paw',
                  apiId: '5b941cfc-4ab5-4f24-a48c-2dafec4cf231'
                },
                {
                  buildHookId: '6008525e70978a28c14f6193',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-978m3zdb',
                  apiId: '1865947b-a519-4629-aff1-6b292b17e91b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tinacho/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-978m3zdb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
