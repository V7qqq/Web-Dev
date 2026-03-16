x = int(input())

digit_sum = 0

while x > 0:
    last_digit = x % 10
    digit_sum += last_digit
    x = x // 10

print(digit_sum)