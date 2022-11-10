def solution(cipher, code):
    answer = ''
    for i in range(1, len(cipher) + 1):
        if i % code == 0:
            answer += cipher[i - 1]
    return answer