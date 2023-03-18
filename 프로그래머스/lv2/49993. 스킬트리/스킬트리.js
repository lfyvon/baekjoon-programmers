function solution(skill, skill_trees) {
    var answer = 0;
    for(let i = 0; i < skill_trees.length; i++){
        let str = skill_trees[i].split('').filter(el => skill.includes(el));
        let count = 0;
        for(let j = 0; j < str.length; j++){
            if(str[j] === skill[j]) count++;
        }
        if(count === str.length) answer++;
    }
    return answer;
}