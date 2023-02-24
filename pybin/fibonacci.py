import argparse
import turtle

n = 10
s = 10
speed = 6

parser = argparse.ArgumentParser(description='Draw the fibonacci spiral')
parser.add_argument('n', type=int, help='Length of fibonacci sequence')
parser.add_argument('-s', '--scale', type=int, default=1)
parser.add_argument('--speed', type=int, default=6, help='Turtle speed')
args = parser.parse_args()


def fib(n):
    a, b = 1, 1
    for _ in range(n):
        yield a
        a, b = b, a+b


turtle.speed(args.speed)
turtle.right(90)

for n in fib(args.n):
    turtle.circle(n*args.scale, 90)