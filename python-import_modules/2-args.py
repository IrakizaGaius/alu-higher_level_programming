#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    num_args = len(argv)
    print("{:d} {:s}{:s}".format(num_args - 1, "argument" if num_args <= 2 else "arguments",
                                 "." if num_args == 1 else ":"))
    for i, arg in enumerate(argv):
        if i > 0:
            print("{:d}: {:s}".format(i, arg))
