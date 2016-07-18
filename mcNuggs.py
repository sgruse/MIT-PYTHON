# Packs come in 6, 9, 20
# Need to find the combinations to find 50, 51, 52, 53, 54 and 55.
# n = 50
# savedn = []
# while consecutiveCount < 6:
#     solution = (0,0,0)
#     for a in range(0,n):
#         for b in range(0,n):
#             for c in range(0,n):
#                 if 6*a + 9*b + 20*c == n:
#                     solution = (a,b,c)
#                     if solution = (0, 0, 0):
#                         consecutiveCount = 0
#                         savedn += [n]
#                     else:
#                         consecutiveCount += 1
#                         n += 1
def McNuggets(n):
    # if number is bigger than 45, there will be a combination; thus return True
    if n > 45:
        return True

    # if number is less than 5, return False
    if n < 6:
        return False

    # if number can be divided by 6 or 9 or 20 directly, return True
    if (n % 6 == 0) or (n % 9 == 0) or (n % 20 == 0):
        return True

    # initialize ranges of highest multiple for each package size
    a = range(n/6 + 1)
    b = range(n/9 + 1)
    c = range(n/20 + 1)

    # for each possible combination, check if 6*a + 9*b + 20*c == n.  If so,
    # return True
    for i in a:
        for j in b:
            for k in c:
                if 6*i + 9*j + 20*k == n:
                    return True

    # if the loops above run but no True value, return False
    return False

print(McNuggets(51))
