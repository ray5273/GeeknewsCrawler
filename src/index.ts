import { parseRSSFeed } from './rssFeedParser';
import { queryDatabase} from "./database";

function timeoutPromise(promise: Promise<void>, ms: number | undefined) {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const timeout = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error(`Promise timed out after ${ms} ms`));
        }, ms);
    });

    return Promise.race([
        promise,
        timeout
    ]).finally(() => {
        clearTimeout(timeoutId);
    });
}

const feedUrl = 'https://news.hada.io/rss/news'; // 실제 RSS 피드 URL로 대체
// parseRSSFeed(feedUrl).then(() => {
//     console.log('RSS 피드 읽기 완료');
// });



// 이 함수를 사용하여 원래의 프로미스에 타임아웃을 설정합니다.
timeoutPromise(parseRSSFeed(feedUrl), 10000) // 10초 타임아웃
    .then(() => console.log('RSS 피드 읽기 완료'))
    .catch(error => console.error('An error occurred:', error));


queryDatabase();