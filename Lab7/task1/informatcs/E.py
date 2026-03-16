length = 109
a = int(input())
b = int(input())
if a > 0:
    print(a*b-length)
else:
    print(length-abs(a*b))
