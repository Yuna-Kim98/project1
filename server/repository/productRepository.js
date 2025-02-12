import { db } from './db.js';

export const getCategoryItems = async() => {
    const sql = `select id,
                        category,
                        name,
                        image->>'$[0]' as image,
                        likes,
                        star,
                        stock,
                        original_price,
                        discount_rate,
                        discounted_price
                from products`;

    const [result] = await db.execute(sql);

    return result;
}