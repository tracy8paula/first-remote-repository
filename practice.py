
import random
secret_number = random.randint(1,20)
# creating our game
print("Welcome to our guess game!")

guesses = 0
guess = 0    ## it is very important to initialise your variables.

while guess != secret_number:
    print("Take a guess!")
    guess = int(input( ))

    guesses += 1

    if guess < secret_number:
        print("Your guess is too low.")
    elif guess > secret_number:
        print("Your guess is too high.")
    else:
        break

if guess == secret_number:
    print("Woohoo, you guessed right!")
else:
    print(f"No, I was thinking of {secret_number}.")

# countdown function
import time

def countdown(seconds):
    while seconds > 0:
        print(f"{seconds} seconds")
        seconds -= 1
        time.sleep(1)
    print("Blast off!")

seconds = int(input("What value are counting down from? "))
countdown(seconds)


# file handling of sorts
import os
print(os.getcwd)
# setting working directory
os.mkdir("testing")
file = open("Courtship.docx", "r+")
#first_line = file.readline

