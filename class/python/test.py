#x = 'a'
#if x < 'c':
#    x += 'b'
#if x > 'z':
#    x += 'c'
    
#print(x)

#hour = 9
#day = 23

#hour > 12 and day <= 15 or hour < 10

# x = [2, 4]

# x += [6, 8]

# print(x[2]//x[0])

nums = [1, 2, 3, 4]

res = 0

for x in nums:

    if x%2==0:

        continue

    else:

        res += x

        

print(res)