const score = [10, 20, 30, 40, 50]
// const filter_score = score.filter((score) => {
//     return score > 20;
// });


// console.log(score);
// console.log(filter_score);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];


  const premiumUsers = users.filter(user => {
    return user.premium;
  })

  console.log(premiumUsers);