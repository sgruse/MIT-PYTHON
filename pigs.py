

def solve(numLegs, numHeads):
    for numChicks in range(0, numHeads + 1):
        numPigs = numHeads - numChicks
        totLegs = 4 * numPigs + 2 * numChicks
        if totLegs == numLegs:
            return (numPigs, numChicks)
    return (none, none)


# print(solve(56, 20))

# Breaking out into modules

def barnYard():
    heads = int(raw_input('Enter number of heads'))
    legs = int(raw_input('Enter number of legs'))
    pigs, chickens = solve(legs, heads)
    if pigs == None:
        print('There is no solution')
    else:
        print('Number of pigs is', pigs)
        print('Number of chickens is', chickens)

# barnYard()

# Is Pallindrome

def isPall(str):
    if len(str) <= 1: print(True)
    # Thi return is checking to see if this 'srt[]' condition is true, if it is then run isPall again
    else: return str[0] == str[-1] and isPall(str[1:-1])

# isPall('racecar')

# Fibonacci Numbers

def fibby(x):
    print(x - 1)
    if x == 0 or x == 1: return 1
    else: return fibby(x - 1) + fibby(x - 2)

# print(fibby(24))

# Using a for loop
def fibby(x):
    f = 1
    a = 0
    b = 1
    for i in range(1, x + 1):
        f = a + b
        a = b
        b = f
    return f

print(fibby(24))


# Bi-Section Method

def squareRootBi(x, epsilon):
    assert x >= 0, 'X must be a non-negitive, non' + str(x)
    assert epsilon > 0, 'Epsilon must be a postive, non' + str(epsilon)
    low = 0
    high = max(x, 1.0)
    guess = (low + high) / 2.0
    ctr = 1
    while abs(guess**2 - x ) > epsilon and ctr <= 100:
        if guess**2 < x:
            low = guess
        else:
            high = guess
        guess = (low + high) / 2.0
        ctr += 1
    assert  ctr <= 100
    print 'Bi method. Num. iterations: ', ctr, 'Estimate', guess
    return guess

print(squareRootBi(15, 0.0001))
