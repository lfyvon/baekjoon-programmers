function solution(sizes) {
    let width = 0;
    let height = 0;
    for(let i = 0; i < sizes.length; i++){
        const [w, h] = sizes[i].sort((a, b) => b - a);
        width = Math.max(width, w);
        height = Math.max(height, h);
    }
    return width * height;
}