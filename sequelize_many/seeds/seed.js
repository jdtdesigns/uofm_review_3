const db = require('../config/connection');
const { Bakery, Bread } = require('../models');

db.sync({ force: true })
  .then(async () => {
    // const new_bakery = await Bakery.create({
    //   name: 'Gunner\'s Bunnery'
    // });

    // console.log(new_bakery);

    // const breads = await Bread.bulkCreate([
    //   {
    //     type: 'whole wheat'
    //   },
    //   {
    //     type: 'hot cross'
    //   }
    // ]);

    // console.log(breads);


    // const bunnery = await Bakery.findOne({
    //   where: { id: 1 }
    // });
    // const bread1 = await Bread.findOne({
    //   where: { id: 1 }
    // });
    // const bread2 = await Bread.findOne({
    //   where: { id: 2 }
    // });

    // await bunnery.addBread(bread1);
    // await bunnery.addBread(bread2);


    // const bakery = await Bakery.findOne({
    //   where: { id: 1 },
    //   include: {
    //     model: Bread,
    //     as: 'breads'
    //   }
    // });

    // console.log(bakery.breads);
  });