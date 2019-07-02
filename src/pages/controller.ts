import { JsonController, Get, Param, Put, Post, Body, HttpCode } from 'routing-controllers'
import pagesById, { Page } from './data'

type PageList = { pages: Page[]}                    //can be converted to an interface --> interface PageList {pages: Page[]}
                                                    // is an object with pages prop that has a value of an array of Page

@JsonController()
export default class PageController {

    @Get('/pages')
    allPages(): PageList {
        const list = Object.values(pagesById)         //return a list of "any"
        return {
            pages: list                               //Object.values(pagesById)         //[pagesById[1], pagesById[2],pagesById[3]]
        }
    }

    @Get('/pages/:id')
    getPage(
        @Param('id') id: number
    ): Page {
        return pagesById[id]
    }

    @Put('/pages/:id')
    updatePage(
        @Param('id') id: number,
        @Body() body: Partial<Page>
    ): Page {
        console.log(`Incoming PUT body param:`, body)
        return pagesById[id]
    }

    @Post('/pages')
    @HttpCode(201)
    createPage(
        @Body() body: Page
    ): Page {
        console.log(`Incoming POST body param:`, body)
        return body
    }
}