#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    num = len(argv)
    print("{:d} {:s}{:s}".format(num - 1, "argument" if num - 1 == 1 else "arguments",
                                 "." if num - 1 == 0 else ":"))
    for i, arg in enumerate(argv):
        if i > 0:
            print("{:d}: {:s}".format(i, arg))
