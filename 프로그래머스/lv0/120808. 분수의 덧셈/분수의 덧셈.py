def solution(numer1, denom1, numer2, denom2):
    numer = numer1 * denom2 + numer2 * denom1
    denom = denom1 * denom2
    return [numer // gcd(denom, numer), denom // gcd(denom, numer)]

gcd = lambda a, b : a if not b else gcd(b, a % b)