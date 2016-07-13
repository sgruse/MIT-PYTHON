
count = 1
inc = 3

while count != 1000:
    for k in range(2, inc):
        if inc % k == 0:
            break
    else:
        print(inc)
        count += 1
    inc += 2

# FASTER IMPLIMINTATION USING SQRT AS A STOPPING POINT
#
from math import *

count = 1
i = 1
while count < 1000:
    i += 2
    for k in range(2, 1+int(sqrt(i+1))):
        if i%k == 0:
            break
    else:
        # print(i) ,
        count += 1
        # if count%20==0: print ""
print i


# PRINTING SUM OF ALL LOGORITHMS OF ALL PRIME NUMBERS

count = 1
inc = 3
logCount = 0

while count != 1000:
    for k in range(2, inc):
        if inc % k == 0:
            break
    else:
        logCount += log(count)
        count += 1
        print(logCount)
    inc += 2
