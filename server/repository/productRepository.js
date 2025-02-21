import { db } from './db.js';

export const getCategoryItems = async() => {
    const sql = `select pid,
                        category,
                        name as title,
                        image->>'$[0]' as img,
                        likes,
                        star,
                        stock as reviewCount,
                        format(original_price, 0) as costprice,
                        discount_rate as discount,
                        format(discounted_price, 0) as saleprice,
                        brand
                from products`;

    const [result] = await db.execute(sql);

    return result;
}

export const getRankItems = async() => {
    const sql = `
        select pid,
                category,
                name as title,
                image->>'$[0]' as img,
                likes,
                star,
                stock as reviewCount,
                format(original_price, 0) as costprice,
                discount_rate as discount,
                format(discounted_price, 0) as saleprice,
                brand
        from products
        order by likes
    `;

    const [result] = await db.execute(sql);

    return result;
}