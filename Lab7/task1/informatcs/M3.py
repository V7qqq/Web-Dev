s = input()
decimal_value = 0
for digit in s:
    decimal_value = decimal_value * 2 + int(digit)

print(decimal_value)