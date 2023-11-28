import { Pool } from 'pg';

// Pool을 생성하고 설정하기
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'newsdb',
    password: 'admin',
    port: 5432,
});

// 비동기 함수를 사용하여 쿼리 실행
export const queryDatabase = async () => {
    try {
        // 연결을 가져오고 쿼리 실행
        const res = await pool.query('SELECT * from news');

        // 결과 출력
        console.log(res.rows);

        // 풀 연결 종료
        await pool.end();
    } catch (err) {
        console.error(err);
    }
};

// 함수 실행
// queryDatabase();
