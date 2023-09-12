class Solution:
    def isValid(self, s: str) -> bool:
      stack = []
      for paren in s:
        if paren == ')' and len(stack) > 0 and stack[-1] == '(':
          stack.pop()
          continue
        if paren == ']' and len(stack) > 0 and stack[-1] == '[':
          stack.pop()
          continue
        if paren == '}' and len(stack) > 0 and stack[-1] == '{':
          stack.pop()
          continue
        stack.append(paren)
      if len(stack):
        return False
      return True