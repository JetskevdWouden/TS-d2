// import { JsonController, Get, Param, Put, Post, Body, HttpCode } from 'routing-controllers'
import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode, Authorized } from 'routing-controllers'
import Page from './entity'

//type PageList = { pages: Page[]}                    //can be converted to an interface --> interface PageList {pages: Page[]}
// is an object with pages prop that has a value of an array of Page

@JsonController()
export default class PageController {

    // @Get('/pages')
    // allPages(): PageList {
    //     const list = Object.values(pagesById)         //return a list of "any"
    //     return {
    //         pages: list                               //Object.values(pagesById)         //[pagesById[1], pagesById[2],pagesById[3]]
    //     }
    // }

    @Get('/pages')
    async allPages() {
      const pages = await Page.find()
      return { pages }
    }

    @Get('/pages/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Page.findOne(id)
    }

    @Put('/pages/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Page>
    ) {
        const page = await Page.findOne(id)
        if (!page) throw new NotFoundError('Cannot find page')

        return Page.merge(page, update).save()
    }

    @Authorized()
    @Post('/pages')
    @HttpCode(201)
    createPage(
      @Body() page: Page
    ) {
      return page.save()
    }

    // @Put('/pages/:id')
    // updatePage(
    //     @Param('id') id: number,
    //     @Body() body: Partial<Page>
    // ): Page {
    //     console.log(`Incoming PUT body param:`, body)
    //     return pagesById[id]
    // }

    // @Post('/pages')
    // @HttpCode(201)
    // createPage(
    //     @Body() body: Page
    // ): Page {
    //     console.log(`Incoming POST body param:`, body)
    //     return body
    // }
}