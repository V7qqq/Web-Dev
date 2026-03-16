x = int(input())
reversed_x = 0
while x > 0:
    last_digit = x % 10
    reversed_x = reversed_x * 10 + last_digit
    x = x // 10
print(reversed_x)