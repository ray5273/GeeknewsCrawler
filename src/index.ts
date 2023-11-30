import { parseRSSFeed } from './rssFeedParser';
import { queryDatabase} from "./database";

const feedUrl = 'https://news.hada.io/rss/news'; // 실제 RSS 피드 URL로 대체

(async () => {
    try {
        await parseRSSFeed(feedUrl)
            .then(() => {
                console.log('RSS 피드 읽기 완료');
            }).catch(error => {
                console.error('An error occurred:', error);
            }
        );
        await queryDatabase().then(() => {
            console.log('DB 쿼리 완료');
        }).catch(error => {
            console.error('An error occurred:', error);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();