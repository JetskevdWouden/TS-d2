// export interface Page {
//     id: number,
//     title: string,
//     content: string
//   }
  
//   interface PageDatabase {
//     [id: number]: Page                  //[id: number] --> index //prop name is a number (any number thats what the [] mean)
//   }
  
//   const pagesById: PageDatabase = {
//     1: {
//       id: 1,
//       title: 'Homepage',
//       content: `<h1>Homepage</h1>`
//           +`This is the homepage, and everything starts with a <strong>home</strong>page.`
//     },
//     2: {
//       id: 2,
//       title: 'Links',
//       content: `<h1>Links</h1>`
//           +`Here's where we will give you <i>links</i> to other pages.`
//     },
//     3: {
//       id: 3,
//       title: 'Social media',
//       content: `<h1>Social media</h1>`
//           +`This is where you'll find links to our social media thing. Find us on Insta!`
//     }
//   }
  
//   export default pagesById