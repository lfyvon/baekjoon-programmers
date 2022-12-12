def solution(s):
    s = s.split()
    list = [int(i) for i in s]
    return f'{min(list)} {max(list)}'