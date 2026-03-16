def missing_char(str, n):
  answer = ""
  for i in range(len(str)):
    if i == n:
      continue
    else:
      answer += str[i]
  return answer;