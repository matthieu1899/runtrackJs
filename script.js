// Fonction de tri
function tri(numbers, order) {
    // Créer une copie du tableau pour ne pas le modifier directement
    const tableau = [...numbers];
    
    // Tri à bulles
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length - i - 1; j++) {
            let condition;
            
            if (order === "asc") {
                condition = tableau[j] > tableau[j + 1];
            } else if (order === "desc") {
                condition = tableau[j] < tableau[j + 1];
            }
            
            // Permutation si la condition est vraie
            if (condition) {
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
    
    return tableau;
}

// Tests
const nombres = [42, 15, 89, 3, 56, 23, 7];

console.log("Tableau original :", nombres);
console.log("Tri ascendant :", tri(nombres, "asc"));
console.log("Tri descendant :", tri(nombres, "desc"));

// Tests supplémentaires
console.log(tri([9, 2, 5, 1, 8], "asc"));   // [1, 2, 5, 8, 9]
console.log(tri([9, 2, 5, 1, 8], "desc"));  // [9, 8, 5, 2, 1]
