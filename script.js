let phrases = [
    'надменный',
    'алчный',
    'недалекий',
    'случайный',
    'безумный',
    'лающий',
    'хрюкающий',
    'трусливый',
    'изнасилованный',
    'верховный',
    'глумливый',
    'разномастный',
    'западный',
    'кровожадный',
    'бессловестный',
    'угнетенный',
    'прихлебающий',
    'кучкующийся',
    'предающий',
    'рабовладельческий',
    'сатанинский',
    'хрюкающий',
    'люциферский',
    'наркоманский',
    'обывательский',
    'нацистский',
    'прислужливый',
    'темный',
    'трусливый',
    'манкуртский',
    'перебегающий'

  ];

  let phrasesb = [
    'нацист-наркоман',
    'подсвинок',
    'прилипала',
    'прихлебатель',
    'предатель',
    'перебежчик',
    'повелитель тьмы',
    'манкурт',
    'властелин ада',
    'люцифер',
    'иблис'
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  let phraseb = document.querySelector('.phraseb');
  
  
  button.addEventListener('click', function () {
      phrase.textContent = getRandomElement(phrases);
      phraseb.textContent = getRandomElement(phrasesb);
  
  });