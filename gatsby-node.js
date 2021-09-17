const { graphql } = require("gatsby")
const path = require(`path`)

// create member pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMembersJson {
        nodes {
          en {
            name
          }
          fr {
            name
          }
          parent {
            id
          }
        }
      }
      allFile(
        filter: {extension: {eq: "json"}, relativeDirectory: {eq: "content/members"}}
      ) {
        nodes {
          name
          id
        }
      }
    }
  `)

  result.data.allMembersJson.nodes.forEach(node => {
    const member = node.en.name
    const id = node.parent.id
    const slug = result.data.allFile.nodes.find(node => node.id === id).name.substring(3, )

    Object.keys(node).forEach(key => {
      if (key !== "parent") {
        const language = key
        const template = "MemberPage.js"

        createPage({
          path: `${language === "en" ? "" : "/fr"}/members/${slug}`,
          component: path.resolve(`./src/templates/${template}`),
          context: { slug: slug, language: language, member: member }
        })
      }
    })
  })
}
