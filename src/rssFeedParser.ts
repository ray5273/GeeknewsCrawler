// rssFeedParser.ts
import RSSParser from 'rss-parser';
import JSDOM from 'jsdom';

const parser = new RSSParser();

export async function parseRSSFeed(url: string) {
    try {
        const feed = await parser.parseURL(url);
        console.log(feed.title);
        for (const entry of feed.items) {
            console.log(entry.title + ':' + entry.link);
            console.log("content : \n" + entry.content);

            const domParser = new JSDOM.JSDOM(entry.content);
            const docli = Array.from(domParser.window.document.querySelectorAll('li')).map((li: { textContent: any; }) => li.textContent);
            const docp = Array.from(domParser.window.document.querySelectorAll('p')).map((p: { textContent: any; }) => p.textContent);
            console.log(docli)
            console.log(docp)
        }

    } catch (error) {
        console.error(error);
    }
}
