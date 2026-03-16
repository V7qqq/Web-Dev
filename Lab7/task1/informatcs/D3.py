x = int(input())
d = int(input())

count = 0

if x == 0 and d == 0:
    count = 1
else:
    while x > 0:
        last_digit = x % 10
        if last_digit == d:
            count += 1
        x = x // 10

print(count)