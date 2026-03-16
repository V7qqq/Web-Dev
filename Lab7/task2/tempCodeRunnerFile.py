from models import Animal, Dog, Bird, Cat
sharik = Dog("Sharik","Лабрадор",34)
sinisa = Bird("Синица","Кайфожурная",2,"Тенор")
vasya = Cat("Вася","Мышачая", 33, 18 )

print(sharik.sound())
print(sinisa.sound())
print(vasya.sound())