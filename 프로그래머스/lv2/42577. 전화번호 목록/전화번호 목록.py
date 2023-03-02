def solution(phone_book):
    hash = {}
    for p in phone_book:
        hash[p] = 1

    for p in phone_book:
        for i in range(1, len(p)):
            if p[:i] in hash and p[:i] != p:
                return False
    return True