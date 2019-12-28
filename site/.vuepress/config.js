module.exports = {
  title: '橡树屋',
  description: '欢迎来到孙子平的博客',
  head: [
    ['link', { rel: 'icon', sizes: '32x32',
      href: `/assets/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', sizes: '16x16',
      href: `/assets/icons/favicon-16x16.png` }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '标签', link: '/tag/' },
      { text: '分类', link: '/category/' },
      { text: '连载', link: '/series/' },
      { text: '关于', link: '/about.html' }
    ],
    sidebar: 'auto',
    repo: 'sunziping2016/oak-tree-house',
    docsDir: 'site',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新'
  },
  plugins: [
    ['@vuepress/last-updated'],
    ['mathjax', { target: 'svg' }],
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          itemPermalink: '/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 10
          }
        }
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tags'],
          path: '/tag/',
          scopeLayout: 'TagFrontmatterPagination',
          frontmatter: {
            title: 'Tag',
            name: '标签'
          },
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: 'category',
          keys: ['category'],
          path: '/category/',
          scopeLayout: 'CategoryFrontmatterPagination',
          frontmatter: {
            title: 'Category',
            name: '分类'
          },
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: 'author',
          keys: ['author'],
          path: '/author/',
          scopeLayout: 'AuthorFrontmatterPagination',
          frontmatter: {
            title: 'Author',
            name: '作者'
          },
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: 'series',
          keys: ['series'],
          path: '/series/',
          scopeLayout: 'SeriesFrontmatterPagination',
          frontmatter: {
            title: 'Series',
            name: '连载文章'
          },
          pagination: {
            lengthPerPage: 10
          }
        }
      ]
    }]
  ],
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
  }
}
