from abc import ABC,abstractmethod
class Animal(ABC):


    def __init__(self,name,breed,age):
        self.name = name
        self.breed = breed
        self.age = age
    
    @abstractmethod
    def sound(self):
        pass

    def get_age(self):
        return self.age
    def get_breed(self):
        return self.breed
    
    def __str__(self):
        return f"имя - {self.name} порода - {self.breed} года - {self.age}"
class Dog(Animal):
    def __init__(self,name,breed,age):
        super().__init__(name,breed,age)
    def sound(self):
        return f"{self.name} гавкает ведь он дебил"


class Cat(Animal):
    def __init__(self,name,breed,age,length_tail):
        super().__init__(name,breed,age)
        self.length_tail = length_tail
    def sound(self):
        return f"{self.name} мяукает ведь он дебил"
    
class Bird(Animal):
    def __init__(self,name,breed,age,vocal_range):
        super().__init__(name,breed,age)
        self.vocal_range = vocal_range
    def sound(self):
        return f"{self.name} поет ведь он дебил"


    