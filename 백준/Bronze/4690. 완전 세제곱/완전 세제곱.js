const result = [];
for(let a = 6; a <= 100; a++){
    const aTri = a * a * a;
    for(let b = 2; b <= 100; b++){
        const bTri = b * b * b;
        for(let c = b + 1; c <= 100; c++){
            const cTri = c * c * c;
            for(let d = c + 1; d <= 100; d++){
                const dTri = d * d * d;
                if(aTri === bTri + cTri + dTri){
                    result.push(`Cube = ${a}, Triple = (${b},${c},${d})`);
                }
                if(aTri < bTri + cTri + dTri){
                    break;
                }
            }
        }
    }
}
console.log(result.join("\n"));