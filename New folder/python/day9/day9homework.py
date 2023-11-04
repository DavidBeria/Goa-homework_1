money = int(input("რა თანხას დებ: "))

precent = float(input("რა პროცენტით დებ ანაბარს: "))

year_1 = money * precent / 100 + money

year_2 = year_1 * precent / 100 + year_1

print("შენი თანხა ორ წელში იქნება: " + str(year_2))