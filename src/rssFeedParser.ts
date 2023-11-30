// rssFeedParser.ts
import RSSParser from 'rss-parser';
import JSDOM from 'jsdom';
import { pool } from './database'

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

            // Insert the data into the database
            const insertQuery = {
                text: 'INSERT INTO news(title, contents, link) VALUES($1, $2, $3)',
                values: [entry.title, docli, entry.link], //`{${docp.join(',')}}`
            }

            try {
                const res = await pool.query(insertQuery);
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        }

    } catch (error) {
        console.error(error);
    } finally {
        await pool.end();
    }
}
