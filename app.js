function wordReplacer(maxInt = 100) {
  let minInt = 0;
  let numRange = [...Array(maxInt).keys()].map(n => n + 1);
  let output = [];
  numRange.forEach((number) => {
    let input = '';

   if (number % 2 === 0) {
     input = 'yu';
   } if (number % 3 === 0) {
     input += input ? '-gi' : 'gi';
   } if (number % 5 === 0) {
     input += input ? '-oh' : 'oh';
   } if (!input) {
     input = number;
   }
   output.push(input)
  });
  return output;

};

wordReplacer(100);
wordReplacer(18);