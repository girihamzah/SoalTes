function countPairsOfSocks(arr) {
    const frequency = {};
    
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequency[num] = (frequency[num] || 0) + 1;
    }
    
    let pairsCount = 0;
    for (const key in frequency) {
      const occurrences = frequency[key];
      pairsCount += Math.floor(occurrences / 2);
    }
  
    return pairsCount;
  }
  
  const inputSoalA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const outputA = countPairsOfSocks(inputSoalA);
  console.log('Soal A -',outputA); // Output yang diharapkan: 3

  const inputSoalB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
  const outputB = countPairsOfSocks(inputSoalB);
  console.log('Soal B -',outputB); // Output yang diharapkan: 6
  
  const inputSoalC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
  const outputC = countPairsOfSocks(inputSoalC);
  console.log('Soal C -',outputC); // Output yang diharapkan: 6

  