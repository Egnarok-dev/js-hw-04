const programmingLanguages = ['Pyton', 'C++', 'C#', 'PHP'];

for (let programmingLanguage of programmingLanguages) {
  if ('Java Script' !== programmingLanguage) {
    console.log(`Значення Java Script в списку немає, додаємо в масив.`);
  }
}

programmingLanguages.push('Java Script');

console.log(programmingLanguages);
