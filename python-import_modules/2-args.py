#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    no = len(argv)
    print("{:d} {:s}{:s}".format(no - 1, "argument" if no - 1 == 1 else "arguments",
                                 "." if no - 1 == 0 else ":"))
    for i, arg in enumerate(argv):
        if i > 0:
            print("{:d}: {:s}".format(i, arg))
