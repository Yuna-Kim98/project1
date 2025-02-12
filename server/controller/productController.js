import * as repository from '../repository/productRepository.js';

export const getCategoryItems = async(req, res) => {
    const result = await repository.getCategoryItems(req.body);
    // console.log('result --> ', result);
    res.json(result);
    res.end();
}