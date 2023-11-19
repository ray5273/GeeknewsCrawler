// rssFeedParser.ts
import RSSParser from 'rss-parser';

const parser = new RSSParser();

export async function parseRSSFeed(url: string) {
    try {
        const feed = await parser.parseURL(url);
        console.log(feed.title);
        for (const entry of feed.items) {
            console.log(entry.title + ':' + entry.link);
            console.log("content : \n" + entry.content);
        }
        // feed.items.forEach(entry => {
        //     console.log(entry.title + ':' + entry.link);
        //     console.log("content : \n" + entry.content)
        // });
    } catch (error) {
        console.error(error);
    }
}
